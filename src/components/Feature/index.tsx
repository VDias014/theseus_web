import { Box, SimpleGrid, Text, Stack, Flex, Icon } from '@chakra-ui/react';
import { FiDollarSign, FiGift, FiTruck } from 'react-icons/fi';  // Importe os ícones necessários

interface FeatureProps {
  title: string;
  text: string;
  backgroundColor?: string;
  color?: string;  // Adicione a propriedade de cor do texto
  icon: React.ElementType;  // Adicione a propriedade de ícone
}

const Feature = ({ title, text, backgroundColor, color, icon }: FeatureProps) => {
  return (
    <Stack
      bg={backgroundColor || 'gray.100'}
      p={4}
      textAlign={'center'}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={color || 'white'}
        bg={backgroundColor || 'white'}
        mb={4}
      >
        <Icon as={icon} w={50} h={50} />
      </Flex>
      <Text fontWeight={600} fontSize={20} color={color || 'white'}>
        {title}
      </Text>
      <Text color={'white'}>{text}</Text>
    </Stack>
  );
}

export default function SimpleThreeColumns() {
  return (
    <Stack align={'center'}>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        w={{ base: '80vw', md: '40vw' }}
        spacing={10}
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
      >
        <Feature
          title={'Affordable Prices'}
          text={''}
          backgroundColor={'green.900'}
          color={'#FCF5EB'}
          icon={FiDollarSign}
        />
        <Feature
          title={'Guaranteed Quality'}
          backgroundColor={'green.800'}
          text={''}
          color={'#FCF5EB'}
          icon={FiGift}
        />
        <Feature
          title={'Safety and Efficiency'}
          text={''}
          backgroundColor={'green.700'}
          color={'#FCF5EB'}
          icon={FiTruck}
        />
      </SimpleGrid>
    </Stack>
  );
}
