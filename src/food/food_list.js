import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Flex
} from '@chakra-ui/react';
import '../font.css';
import HeaderBar from "./component/headerBar";
import SearchFilter from './component/searchFilter';
import FoodList from './component/foodList';

function food_list()  {   
/* */
  return (
    <ChakraProvider theme={theme}>
        <Flex
          w="100%"
          h="100%"
          pos="relative"
          direction="column"
        >
          <HeaderBar />      
          <SearchFilter/>

          {/*맛집 목록*/}
          <Flex
          w="100%"
          h="auto"
          bg="#FAF9FE"
          padding="16px"
          direction={'row'}
          justifyContent="space-between"
          alignItems="center"
          >
            <FoodList/>
            <FoodList/>
          </Flex>
        
        </Flex>
    </ChakraProvider>
  );
};

export default food_list;