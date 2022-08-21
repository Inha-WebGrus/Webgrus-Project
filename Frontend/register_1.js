import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Stack,
  Button,
  Heading,
  Image,
  Checkbox,
  CheckboxGroup,
  useCheckboxGroup,
  useCheckbox,
  Input

} from '@chakra-ui/react';
import '../src/font.css';
import { Icon } from '@iconify/react';

/*좋아요 버튼 사이즈 조절 */
function App()  {   
/* */
  return (
    <ChakraProvider theme={theme}>
        <Flex
          w="100%"
          h="100%"
          pos="relative"
          alignItems="center"
          justifyContent="center"
          direction="column">
          <Flex 
          w="auto"
          h="auto"
          direction="column"
          >
          {/*First step - 설명*/}
          <Flex
          w="311px" h="120px"
          direction="column"
          justifyContent="space-between"/*동일 여백 */
          >
            <Text
            fontSize={"32px"} fontWeight="bold">
              First steps
            </Text>
            <Text
            fontSize={"16px"} lineHeight= "28px"
            color= "#666A78">
              회원님에 대한 아래의 정보가 필요해요.<br/>
              입력 어쩌고 저쩌고.
            </Text>
          </Flex>

          {/*First step - input 및 다음버튼*/}
          <Flex
          w="312px"
          h="428px"
          mt="61px"
          direction="column"
          >
            <Text mb="4px" fontSize ="19px" fontWeight={"bold"}>
              닉네임
            </Text>
            <Input variant='filled' placeholder='' w="100%" h="64px"
            borderRadius="16px" bg="#F6F6F6" mb="10px"
              />
            <Text mb="4px" fontSize ="19px" fontWeight={"bold"}>
              비밀번호
            </Text>
            <Input variant='filled' placeholder='영소문자 숫자조합 8자 이상'
            _placeholder={{ opacity: 1, color: "#AEB3C2" ,fontSize: "18px", fontWeight: "bold"}}
             w="100%" h="64px"
            borderRadius="16px" bg="#F6F6F6" mb="10px"
              />
            <Text mb="4px" fontSize ="19px" fontWeight={"bold"}>
              비밀번호 확인
            </Text>
            <Input variant='filled' placeholder='' w="100%" h="64px"
            borderRadius="16px" bg="#F6F6F6" mb="10px"
              />
            {/*단계 표시 및 다음버튼 */}
            <Flex
            w="100%"
            h="58px"
            mt="51px"
            justifyContent="space-between"
            >
              <Flex
              w="45px"
              h="9px"
              bg="black"
              justifyContent="space-between"/*동일 여백 */
              alignItems="center"
              >
                <Icon icon="akar-icons:circle-fill"  color="#1442cb" w="9.6px" h="9px"/>
                <Icon icon="akar-icons:circle" color="#1442cb" w="9.6px" h="9px"/>
                <Icon icon="akar-icons:circle" color="#1442cb" w="9.6px" h="9px"/>
              </Flex>
              <Button w="140px" h="58px" bgImage="url('/blue_gd.png')" bgSize="cover"
              fontSize="19px" borderRadius={"24px"} color="white" letterSpacing="0.08em">
                다음
              </Button>
            </Flex>
          </Flex>
          </Flex>
        </Flex>
    </ChakraProvider>
  );
};

export default App;