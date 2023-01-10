import * as React from 'react';
import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react';
import HeaderBar from '../components/HeaderBar';
import MonthScreen from './MonthScreen';

function DateScreen() {
  return (
    <ChakraProvider>
      <Box minHeight="10vh" pos="relative">
        <HeaderBar title="2023" />
        <MonthScreen />
      </Box>
    </ChakraProvider>
  );
}

export default DateScreen;
