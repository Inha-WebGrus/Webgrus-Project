import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex
} from '@chakra-ui/react';
import '../../font.css'
import { Icon } from '@iconify/react';

function FoodInfo()  {   
    /* */
      return (
        <ChakraProvider theme={theme}>
          {/*맛집 정보*/}
          <Flex
          flexShrink={"0"}//부모flex크기에 상관없이 늘리기
          w="343px" h="478px" bg="white"
          paddingX="11px" paddingY="11px"
          mt="155px" border="1px solid  #E1E2E3" borderRadius={"16px"}
          >
            {/*맛집 썸네일*/}
            <Flex pos="relative"
            w="100%" h ="288px" borderRadius={"12px 12px 0 0"}
            bgImage="url('/food_intro.jpg')"
            bgPosition="center" bgRepeat="no-repeat" bgSize="cover"
            >
            {/*맛집 정보*/}
            <Flex pos="absolute"
            alignItems="center" textAlign="center"
            w="283px" h ="212px" borderRadius="16px"
            bg="white" p="16px" 
            left="18px" top="202px"
            >
              
              <Flex
              direction="column" bg="white" w="100%" h="100%"
              alignItems="center">
                {/*요리모자 아이콘*/}
                <Flex
                border= '0.8px solid' borderColor='#E1E2E3'
                borderRadius="42.9741px"
                w="36px" h="37px" mb="12px"
                justify="center"//내부아이콘 가로세로 중앙정렬
                align="center"//
                >
                  <Icon icon="mdi:chef-hat" color="#1abcfe" width="19" height="18" />
                </Flex>
                {/*가게명*/}
                <Text
                w="100%" h="auto" 
                fontSize={"24px"} fontFamily={"AppleSDGothicNeoEB"}
                 letterSpacing="0.023em" lineHeight="29px"
                 mb="12px" 
                >
                  인하대 후문 일식<br/>맛집 가메이
                </Text>
                {/*가게 주소*/}
                <Text
                w="100%" h="auto" fontFamily={"AppleSDGothicNeoM"}
                 fontSize={"16px"} color="#636773"
                 letterSpacing="0.023em" lineHeight="29px"
                 mb="12px"
                >
                  인천 미추홀구 용현동 123-8
                </Text>

                {/*가게 정보(좋아요 수+리뷰 수)*/}
                <Flex 
                w="100%" h="30px" fontFamily={"PretendardVariable"} color="black"
                justifyContent={"center"} align="center" gap={"24px"}>
                  {/*좋아요 수*/}
                  <Flex
                  w="101.5px" flexGrow={"1"}
                  justifyContent={"flex-end"} align="center"
                  gap="12px"
                  >
                   <Text
                   fontSize="16px" text-align="right"
                   >1.3k</Text> 
                   <Text
                   fontSize="14px" text-align="right"
                   >Likes</Text> 
                  </Flex>
                  <Box h="0" w="30px" bgcolor="#E1E2E3" border="1px solid #E1E2E3" flexGrow={"0"} transform="rotate(90deg)"></Box>
                  {/*리뷰 수*/}
                  <Flex
                  w="101.5px" flexGrow={"1"}
                  justifyContent={"flex=start"} align="center"
                  gap="12px"
                  >
                   <Text
                   fontSize="16px" text-align="right"
                   >7</Text> 
                   <Text
                   fontSize="14px" text-align="right"
                   >Reviews</Text> 
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>   
          </Flex>
        </ChakraProvider>
      );
    };
    
    export default FoodInfo;