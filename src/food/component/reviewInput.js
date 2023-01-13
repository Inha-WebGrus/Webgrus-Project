import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex,
  Input,
} from '@chakra-ui/react';
import '../../font.css';
import Star from './star.js';

function ReviewInput() {
  /* */
  return (
    <ChakraProvider theme={theme}>
      {/*리뷰 입력란*/}
      <Flex
        w="100%"
        h="71px"
        paddingX="18px"
        paddingY="8pX"
        alignItems="center"
        justifyContent="space-between"
        bg="#00000"
        borderTop={'1px'}
        borderColor={'#C0C0C0'}
      >
        <Input
          variant="filled"
          placeholder="리뷰를 작성해주세요."
          w="87%"
          h="45px"
          borderRadius="16px"
          bg="#F2F3F4"
          color="#636773"
          fontFamily={'AppleSDGothicNeoM'}
          letterSpacing="0.023em"
        />
        <Text
          as="button"
          fontFamily={'AppleSDGothicNeoEB'}
          fontSize={'16px'}
          color="#0F5FA6"
        >
          입력
        </Text>
      </Flex>
      <Star />
    </ChakraProvider>
  );
}

export default ReviewInput;
