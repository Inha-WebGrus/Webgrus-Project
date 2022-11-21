import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex,
  Link
} from '@chakra-ui/react';
import '../../font.css'
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';

function foodInfoReview()  {   
    /* */
      return (
        <ChakraProvider theme={theme}>
          {/*리뷰*/}
       <Flex w="343px" h="160px" bg="white" 
       display="column" borderRadius={"16px"} p="16px">
        <Flex w="100%" justifyContent={"space-between"} mb="16px">
          <Flex  fontFamily={"AppleSDGothicNeoR"}>
            <Text fontSize="16px" mr="5px">
              리뷰
            </Text>
            <Text fontSize="16px">
              (67)
            </Text>
          </Flex>
          <Link as={RouterLink} to="/food_review">
            <Text as="button" w="46px" h="18px" fontSize="14px" fontFamily={"AppleSDGothicNeoM"}>
                더 보기
            </Text>
          </Link>

        </Flex>
            {/*리뷰*/}
            <Flex
            w="90%"
            h="auto" 
            alignItems="left"
            direction={'column'}
            >
              <Text fontSize={"14px"} fontFamily={"AppleSDGothicNeoUL"}>Renata Moeloek</Text>
              <Text fontSize={"13px"} fontFamily={"AppleSDGothicNeoM"} mb="8px">2020.12.12</Text>
              <Text fontSize={"14px"} fontFamily={"AppleSDGothicNeoB"} mb="2px">너무 좋아요! 정말 맛있네요.</Text>
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
    
    export default foodInfoReview;