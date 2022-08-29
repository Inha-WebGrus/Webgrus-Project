import React from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
  Input 
} from '@chakra-ui/react';
import '../src/font.css';
import { Icon } from '@iconify/react';
import HeaderBarReview from './component/headerBarReview';
import ReviewList from './component/reviewList';
import ReviewInput from './component/reviewInput';


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
          <HeaderBarReview/>
          <ReviewList/>
        </Flex>
        <ReviewInput/>
    </ChakraProvider>
  );
};

export default App;