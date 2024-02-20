import { Flex, VStack, Text, Stack, useBreakpointValue } from '@chakra-ui/react';

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'45vh'}
      backgroundImage={'url(fundo.png)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        align={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}
          >
            SIMPLIFIED REPAIRS
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '3xl' })}
          >
            Your vehicle's missing part!
          </Text>
          <Stack direction={'row'}>{/* Adicione aqui outros elementos, se necessário */}</Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
