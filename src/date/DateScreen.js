import * as React from 'react';
import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react';
import HeaderBar from '../components/HeaderBar';
import styles from './DateScreen.module.css';

import AddRequestForm from '../action/AddRequestForm';
import DateList from './components/DateList';
import DateRequestForm from './components/DateRequestForm';
import MonthsBar from './components/MonthsBar';

function DateScreen() {
  return (
    <ChakraProvider>
      <Box className={styles.boxOut} position="relative">
        <HeaderBar title="2023" />
        <MonthsBar />
      </Box>
      <Box>24</Box>
    </ChakraProvider>
  );
}

export default DateScreen;
