import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex,
  Image,
} from '@chakra-ui/react';
import '../font.css'

/*좋아요 버튼 사이즈 조절 */
function register_complete()  {   
/* */
  return (
    <ChakraProvider theme={theme}>
        <Flex
          w="100%"
          h="900px"
          bg="url('/blue_gd.png')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat" 
          alignItems="center"
          justifyContent="center">
          <Flex 
          w="386px"
          h="595px"
          direction="column"
          alignItems="center"
          >
            {/*Complete 설명*/}
            <Flex
              w="auto"
              h="127px"
              justifyContent="space-between"/*동일 여백 */
              direction="column"
              alignItems="center"
              color="white"
              >
              <Text fontSize={"39px"} fontFamily={"MontserratBold700"}>
                Bravo!
              </Text>
              <Text fontSize={"17px"} textAlign="center" fontFamily={"APPLESDGOTHICNEOM"}>
                회원가입이 성공적으로 완료되었어요!<br/>
                이제 자유롭게 이용할 수 있어요.
              </Text>
            </Flex>

            {/*Complete 체크*/}
            <Image src='complete.png' w="272px" h="272px"
            mt="60px" />

            {/*메인으로 버튼*/}
            <Box as='button'
            borderRadius='100px' bg="white" fontSize={"17px"} 
            fontFamily={"APPLESDGOTHICNEOEB"} color='#1D58DF' px={4} letterSpacing="0.08em"
            w="239px" h="52px"
            mt="90px"
            >메인으로
            </Box>
          </Flex>
        </Flex>
    </ChakraProvider>
  );
};

export default register_complete;