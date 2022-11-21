import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex,
  Button,
  Input

} from '@chakra-ui/react';
import '../font.css'
import { Icon } from '@iconify/react';


function register_2()  {   
/* */
  return (
    <ChakraProvider theme={theme}>
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          direction="column">
          <Flex 
          w="auto"
          h="auto"
          direction="column"
          mt="23%"
          >
          {/*Second step - 설명*/}
          <Flex
          w="311px" h="120px"
          direction="column"
          justifyContent="space-between"/*동일 여백 */
          >
            <Text
            fontSize={"32px"}  fontFamily={"MontserratBold700"}>
              Second steps
            </Text>
            <Text
            fontSize={"16px"} lineHeight= "28px" 
            color= "#666A78" fontFamily={"AppleSDGothicNeoM"}>
              인하대학교 이메일 학번@inha.edu 인증을<br/>
              통해 어쩌고 저쩌고.
            </Text>
          </Flex>

          {/*First step - input 및 다음버튼*/}
          <Flex
          w="312px"
          h="428px"
          mt="61px"
          direction="column"
          justifyContent="space-between" fontFamily={"AppleSDGothicNeoB"}
          >
            <Box>
              <Text mb="4px" fontSize ="19px">
                인하 이메일
              </Text>
              <Input variant='filled' placeholder='' w="100%" h="64px"
              borderRadius="16px" bg="#F6F6F6" mb="10px"
                />
            </Box>
            {/*단계 표시 및 다음버튼 */}
            <Flex
            w="100%"
            h="58px"
            mt="51px"
            justifyContent="space-between"
            >
              <Flex
              w="58px"
              h="9px"
              justifyContent="space-between"/*동일 여백 */
              alignItems="center"
              >
                <Icon icon="akar-icons:circle" color="#1442cb" w="9.6px" h="9px"/>
                <Icon icon="akar-icons:circle-fill"  color="#1442cb" w="9.6px" h="9px"/>
                <Icon icon="akar-icons:circle" color="#1442cb" w="9.6px" h="9px"/>
              </Flex>
              <Button w="140px" h="58px" bgImage="url('/blue_gd.png')" bgSize="cover" fontFamily={"AppleSDGothicNeoM"}
              fontSize="19px" borderRadius={"24px"} color="white" letterSpacing="0.08em">
                전송 
              </Button>
            </Flex>
          </Flex>
          </Flex>
        </Flex>
    </ChakraProvider>
  );
};

export default register_2;