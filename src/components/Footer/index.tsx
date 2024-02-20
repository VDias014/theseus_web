'use client'

import { ReactNode } from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Flex,
  Link,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'


const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('#FCF5EB', '#FCF5EB')}
      color={useColorModeValue('green.800', 'green.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack>
            <Image src="/logoverde.png" alt="Logo" w={{ base: '40vw', md: '10vw' }} objectFit="contain" />
            <Text mt={2} fontWeight={'bold'}>| A Scania Initiative</Text>
            </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Our Repair Services</ListHeader>
            <Box as="a" href={'#'}>
            - ECUs (EMS, GMS, COO, and more...)
            </Box>
            <Box as="a" href={'#'}>
            - Motor
            </Box>
            <Box as="a" href={'#'}>
            - Air & Oil Filter 
            </Box>
            <Box as="a" href={'#'}>
            - Compressors
            </Box>
            <Box as="a" href={'#'}>
            - ARLA
            </Box>
            <Box as="a" href={'#'}>
            - Diagnostics
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Opening Hours</ListHeader>
            <Box as="a" href={'#'}>
            Mon - Fri: 7am - 10pm
            </Box>
            <Box as="a" href={'#'}>
            Sat: 7am - 3pm
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact Us</ListHeader>
            <Box as="a" href={'#'}>
            R José Versolato 101, 12° Andar, Sala 1234 - Centro, São Bernardo do Campo - SP
            </Box>
            <Box as="a" href={'#'}>
            Tel: +55 11 99966-3015
            </Box>
            <Box as="a" href={'#'}>
            carlos.vieira@scania.com
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
      <ListHeader>Install App</ListHeader>
      <Link href="/link-para-appstore" isExternal>
        <Image src="./appstore.png" alt="App Store" w={40} />
      </Link>
      <Link href="/link-para-googleplay" isExternal>
        <Image src="./googleplay.png" alt="Google Play" w={40} />
      </Link>
    </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('green.800', 'green.800')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 Theseus. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}