import nodemailer from 'nodemailer';

export default async function sendMail(req, res) {
  try {
    const { title, message, componentName, componentType, componentCondition, componentDescription, acceptedFiles } = req.body;

    if (!title || !componentName || !componentType || !componentCondition || !componentDescription || !acceptedFiles || !Array.isArray(acceptedFiles)) {
      return res.status(400).json({ message: "Dados incompletos fornecidos." });
    }

    console.log('Dados recebidos:', { title, message, componentName, componentType, componentCondition, componentDescription, acceptedFiles });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'theseus.scania@gmail.com',
        pass: 'ydgn nwuo sbjm nbzw'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const imageAttachments = acceptedFiles.map(file => ({
      filename: file.filename,
      content: file.base64,
      encoding: 'base64'
    }));

    const mailOptions = {
      from: 'theseus.scania@gmail.com',
      to: 'theseus.scania@gmail.com',
      subject: title || 'Novo Registro de Peça!',
      html: `
          <body style="background-color: #153832; color: #FCF5EB; font-family: Arial, sans-serif;">
              <div style="padding: 20px;">
              <img src="https://imgur.com/269g06p.png" alt="Descrição da imagem" width="100" style="width: 20%;" />
                  <h1>NOVO ITEM CADASTRADO</h1>
                  <p>Descrição do item:</p>
                  <p><strong>Nome do Componente: </strong>${componentName}</p>
                  <p><strong>Tipo: </strong>${componentType}</p>
                  <p><strong>Condição: </strong>${componentCondition}</p>
                  <p><strong>Descrição: </strong>${componentDescription}</p>
                  <p><strong>Imagens do componente:</strong></p>
                  ${imageAttachments.map(attachment => `<img src="cid:${attachment.filename}" alt="${attachment.filename}" />`).join('')}
                  <p>Atenciosamente,<br>Theseus Team</p>
              </div>
          </body>
      `,
      attachments: imageAttachments
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error('Falha ao enviar o e-mail:', error);
    res.status(500).json({ message: "Falha ao enviar o e-mail" });
  }
}
