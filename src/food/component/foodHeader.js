import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

function FoodHeader()  {   
    /* */
      return (
        <ChakraProvider theme={theme}>
          {/*상단 메뉴(뒤로가기+좋아요)*/}
          <Flex
          w="90%"
          h="48px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          >
            <Box as="button" w="48px" h="48px" 
            display={"flex"} alignItems="center" justifyContent={"center"}
            borderRadius="100px" bgColor={"white"}
            >
              <Icon icon="ep:arrow-left-bold" h="41px" w="38px" />
            </Box>
            <Box as="button" w="48px" h="48px"
            display={"flex"} alignItems="center" justifyContent={"center"}
            borderRadius="100px" bgColor={"white"}>
              <Icon icon="codicon:heart" color="#1442cb" width="27" height="24" />
            </Box>
          </Flex>
        </ChakraProvider>
      );
    };
    
    export default FoodHeader;