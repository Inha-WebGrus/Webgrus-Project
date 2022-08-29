import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex
} from '@chakra-ui/react';
import '../font.css';
import { Icon } from '@iconify/react';

function FoodList()  {   
    /* */
      return (
        <ChakraProvider theme={theme}>
          <Flex
            w="163.5px"
            h="271px"
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
                  <Icon icon="codicon:heart" width="32" height="32" color="white"/>
                </Box>
              </Box>
              {/*식당 이름 */}
              <Text mt="8px" fontSize={"20px"} fontWeight="bold" fontFamily={"APPLESDGOTHICNEOB"}>
                가메이
              </Text>
              <Text mt="8px" fontSize={"14px"} color="#636773" fontFamily={"APPLESDGOTHICNEOM"}>
                일식
              </Text>
              <Text mt="0px" fontSize={"14px"} color="#B3B4BA" fontFamily={"APPLESDGOTHICNEOL"}>
                103 reviews
              </Text>
            </Flex>
        </ChakraProvider>
      );
    };
    
    export default FoodList;