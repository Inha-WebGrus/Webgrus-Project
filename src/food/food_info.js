import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex
} from '@chakra-ui/react';
import '../font.css';

import FoodHeader from './component/foodHeader';
import FoodInfo from './component/foodInfo';
import FoodInfoReview from './component/foodInfoReview';


function food_info()  {   
/* */
  return (
    <ChakraProvider theme={theme}>
        <Flex
          w="100%"
          h="100%"
          pos="relative"
          paddingY="20px"
          direction="column"
          alignItems="center"
          bg="#F2F3F4"
        >
        <Flex
        w="100%"
        h="705px"
        bg="#F2F3F4"
        direction="column"
        alignItems="center"
        >
        {/*지도*/}
        <Flex
          direction="column"
          alignItems="center"
          w="100%" h ="378px" bg="skyblue">
          <FoodHeader/>
          <FoodInfo/>
        </Flex>
      </Flex>
      <FoodInfoReview/>
      </Flex>
    </ChakraProvider>
  );
};

export default food_info;