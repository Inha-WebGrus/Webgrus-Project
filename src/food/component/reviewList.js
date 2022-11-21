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

function ReviewList()  {   
    /* */
      return (
        <ChakraProvider theme={theme}>
          {/*리뷰 목록*/}
          <Flex
          w="100%"
          h="900px"
          bg="#FAF9FE"
          paddingY="18px"
          direction={'column'}
          justifyContent="space-between"/*동일 여백 */
          alignItems="center"
          borderTop="1px" borderColor={"#C0C0C0"}
          >
            {/*리뷰1*/}
            <Flex
            w="90%"
            h="auto"
            alignItems="left"
            direction={'column'}
            >
              <Text fontSize={"16px"} fontFamily={"AppleSDGothicNeoUL"}>Renata Moeloek</Text>
              <Text fontSize={"12px"} fontFamily={"AppleSDGothicNeoM"} mb="8px">2020.12.12</Text>
              <Text fontSize={"16px"} fontFamily={"AppleSDGothicNeoB"}  mb="6.5px">너무 좋아요! 정말 맛있네요.</Text>
              <Flex w="100.12px" h="16px" color="#40C1EE"
              >
                <Icon mr="4px" w="16px" icon="dashicons:star-filled" />
                <Icon mr="4px"icon="dashicons:star-filled" />
                <Icon mr="4px" icon="dashicons:star-filled" />
                <Icon icon="dashicons:star-half" />
              </Flex>
            </Flex>
          </Flex>
        </ChakraProvider>
      );
    };
    
    export default ReviewList;