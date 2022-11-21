import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Grid, GridItem,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

function Login() {
  return (
    <ChakraProvider>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <ChevronLeftIcon w={7} h={7} color='gray.600'/>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} bgGradient='linear(to-tr, #021B79, #4364F7, #6FB1FC)' bgClip='text'
            >Login</Heading>
          </Stack>
          <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel color='gray.600'>ID</FormLabel>
                <Input type="email" boxShadow='sm' p='6' rounded='md' bg='whiteAlpha.700'/>
              </FormControl>
              <FormControl id="password">
                <FormLabel color='gray.600' >PW</FormLabel>
                <Input type="password" boxShadow='sm' p='6' rounded='md' bg='whiteAlpha.700'/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button
                  bgGradient='linear(to-tr, #021B79, #4364F7, #6FB1FC)'
                  boxShadow='lg' p='6' rounded='md' bg='white'
                  color='white' fontWeight={'normal'}>
                  로그인
                </Button>
              </Stack>
          </Stack>
          <Grid pt={6}>
            <GridItem w='100%' h='0.1' bgColor='darkgray' />
          </Grid>
          <Text align={'right'}>
            아직 계정이 없으신가요?{''}<br></br>
            <Link color='#4364F7' href='#'>회원가입하기</Link>
          </Text>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default Login;
  