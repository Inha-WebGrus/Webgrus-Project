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

function FoodInfoReview()  {   
    /* */
      return (
        <ChakraProvider theme={theme}>
          {/*리뷰*/}
       <Flex w="343px" h="160px" bg="white" 
       display="column" borderRadius={"16px"} p="16px">
        <Flex w="100%" justifyContent={"space-between"} mb="16px">
          <Flex  fontFamily={"APPLESDGOTHICNEOR"}>
            <Text fontSize="16px" mr="5px">
              리뷰
            </Text>
            <Text fontSize="16px">
              (67)
            </Text>
          </Flex>
          <Text as="button" w="46px" h="18px" fontSize="14px" fontFamily={"APPLESDGOTHICNEOM"}>
              더 보기
          </Text>
        </Flex>
            {/*리뷰*/}
            <Flex
            w="90%"
            h="auto" 
            alignItems="left"
            direction={'column'}
            >
              <Text fontSize={"14px"} fontFamily={"APPLESDGOTHICNEOUL"}>Renata Moeloek</Text>
              <Text fontSize={"13px"} fontFamily={"APPLESDGOTHICNEOM"} mb="8px">2020.12.12</Text>
              <Text fontSize={"14px"} fontFamily={"APPLESDGOTHICNEOB"} mb="2px">너무 좋아요! 정말 맛있네요.</Text>
              <Flex w="100.12px" h="16px"  color="#40C1EE"
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
    
    export default FoodInfoReview;