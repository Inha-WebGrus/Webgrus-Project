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

function HeaderBar()  {   
    /* */
      return (
        <ChakraProvider theme={theme}>
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
                <Icon icon="entypo:dots-three-horizontal" height="31" width="27"/> 
                </Box>
                <Text 
                fontSize="21px" fontFamily={"APPLESDGOTHICNEOEB"}
                color ="#1ABCFE" letterSpacing="0.023em"
                >뭘 먹을까?</Text>
                <Box as="button">
                  <Icon icon="ep:arrow-left-bold" h="41px" w="38px"/>
                </Box>
              </Flex>
        </ChakraProvider>
      );
    };
    
    export default HeaderBar;