import React from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
  Input 
} from '@chakra-ui/react';
import '../font.css';
import HeaderBarReview from './component/headerBarReview';
import ReviewList from './component/reviewList';
import ReviewInput from './component/reviewInput';


function food_review()  {   
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

export default food_review;