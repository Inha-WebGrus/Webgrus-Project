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

/*별모양 사이즈 조절 */
function App()  {   
/* */
  return (
    <ChakraProvider theme={theme}>
        <Flex
          w="100%"
          h="100%"
          pos="relative"
          direction="column"

        >
        {/*상단 메뉴*/}
          <Flex
          w="100%"
          h="60px"
          paddingX="27px"
          borderY="1px" borderColor={"#C0C0C0"}
          direction="row"/*flex 내부 가로 정렬 */
          justifyContent="space-between"/*동일 여백 */
          alignItems="center"
          >
            <Box as="button">
              <Icon icon="ep:arrow-left-bold" h="41px" w="38px"/>
            </Box>
            <Text 
            fontSize="20px"
            fontWeight="bold"
            color ="#1ABCFE"
            >리뷰</Text>
            <Box as="button">
              <Icon icon="entypo:dots-three-horizontal" height="31" width="27"/>
            </Box>
          </Flex>

          {/*리뷰 목록*/}
          <Flex
          w="100%"
          h="900px"
          bg="#FAF9FE"
          padding="16px"
          direction={'column'}
          justifyContent="space-between"/*동일 여백 */
          alignItems="center"
          >
            {/*리뷰1*/}
            <Flex
            w="90%"
            h="auto"
            bg="pink"
            alignItems="left"
            direction={'column'}
            >
              <Text fontSize={"16px"}>Renata Moeloek</Text>
              <Text fontSize={"12px"} mb="8px">2020.12.12</Text>
              <Text fontSize={"16px"} fontWeight={"bold"} mb="6.5px">너무 좋아요! 정말 맛있네요.</Text>
              <Flex w="100.12px" h="16px" bg="green" color="#40C1EE"
              >
                <Icon mr="4px" w="16px" icon="dashicons:star-filled" />
                <Icon mr="4px"icon="dashicons:star-filled" />
                <Icon mr="4px" icon="dashicons:star-filled" />
                <Icon icon="dashicons:star-half" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/*리뷰 입력란*/}
        <Flex
          w="100%" h="71px" 
          paddingX="18px" paddingY="8pX"
          alignItems="center" justifyContent="space-between"
          bg="#00000" borderTop={"1px"} borderColor={"#C0C0C0"}>
            <Input variant='filled' placeholder='리뷰를 작성해주세요.' w="87%" h="45px"
            borderRadius="16px" bg="#F2F3F4" color="#636773" fontWeight={"bold"}
            letterSpacing="0.023em"
              />
            <Text as="button"
            fontSize={"16px"} fontWeight={"bold"} color="#0F5FA6"
            >입력</Text>
        </Flex>
    </ChakraProvider>
  );
};

export default App;