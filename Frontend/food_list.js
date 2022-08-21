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
          direction="column"

        >
        {/*상단 메뉴*/}
          <Flex
          w="100%"
          h="60px"
          paddingX="27px"
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
            >뭘 먹을까?</Text>
            <Box as="button">
              <Icon icon="entypo:dots-three-horizontal" height="31" width="27"/>
            </Box>
          </Flex>

          
          {/*검색 필터*/}
          <Flex
          w="100%"
          h="201px"
          borderY="1px" borderColor={"#C0C0C0"}
          paddingX="20px" paddingY="12px"
          direction={"column"}
          >
            <Text
            color="#636773"
            fontSize={"17px"}
            >
              검색 필터
            </Text>
            {/*체크박스 */}
          </Flex>

          {/*맛집 목록*/}
          <Flex
          w="100%"
          h="auto"
          bg="#FAF9FE"
          padding="16px"
          direction={'row'}
          justifyContent="space-between"/*동일 여백 */
          alignItems="center"
          >
            <Flex
            w="163.5px"
            h="271px"
            bg="red"
            direction={"column"}
            >
             {/*썸네일 사진1*/}
              <Box
              w="163.5px"
              h="171px"
              bgImage="url('/food_intro.jpg')"
              pos="relative"
              bgPosition="center"
              bgRepeat="no-repeat" 
              bgSize="cover"
              borderRadius={"16px"}
                >
                {/*좋아요 버튼 */}
                <Box as="button" pos="absolute" bottom="0" right="0"
                pb="10px" pr="10px"
                >
                  <Icon icon="codicon:heart" w="32px" h="32px" color='white'/>
                </Box>
              </Box>
              {/*식당 이름 */}
              <Text mt="8px" fontSize={"20px"} fontWeight="bold">
                가메이
              </Text>
              <Text mt="8px" fontSize={"14px"} color="#636773">
                일식
              </Text>
              <Text mt="0px" fontSize={"14px"} color="#B3B4BA" >
                103 reviews
              </Text>
            </Flex>
            <Flex
            w="163.5px"
            h="271px"
            bg="red"
            direction={"column"}
            >
             {/*썸네일 사진1*/}
              <Box
              w="163.5px"
              h="171px"
              bgImage="url('/food_intro.jpg')"
              pos="relative"
              bgPosition="center"
              bgRepeat="no-repeat" 
              bgSize="cover"
              borderRadius={"16px"}
                >
                {/*좋아요 버튼 */}
                <Box as="button" pos="absolute" bottom="0" right="0"
                pb="10px" pr="10px"
                >
                  <Icon icon="codicon:heart" w="32px" h="32px" color='white'/>
                </Box>
              </Box>
              {/*식당 이름 */}
              <Text mt="8px" fontSize={"20px"} fontWeight="bold">
                가메이
              </Text>
              <Text mt="8px" fontSize={"14px"} color="#636773">
                일식
              </Text>
              <Text mt="0px" fontSize={"14px"} color="#B3B4BA" >
                103 reviews
              </Text>
            </Flex>
            
          </Flex>
        
        </Flex>
    </ChakraProvider>
  );
};

export default App;