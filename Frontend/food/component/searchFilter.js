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

function SearchFilter()  {   
    /* */
      return (
        <ChakraProvider theme={theme}>
          {/*검색 필터*/}
          <Flex
          w="100%"
          h="201px"
          borderY="1px" borderColor={"#C0C0C0"}
          paddingX="20px" paddingY="12px"
          direction={"column"}
          >
            <Text
            color="#636773" letterSpacing="0.023em"
            fontSize={"17px"} fontFamily={"APPLESDGOTHICNEOSB"}
            >
              검색 필터
            </Text>
            {/*체크박스 */}
          </Flex>
        </ChakraProvider>
      );
    };
    
    export default SearchFilter;