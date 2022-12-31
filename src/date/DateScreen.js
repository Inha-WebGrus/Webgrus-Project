import * as React from 'react';
import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react';
import HeaderBar from '../components/HeaderBar';
import styles from './DateScreen.module.css';
import MonthsBar from './components/MonthsBar';

import AddRequestForm from '../action/AddRequestForm';
import DateList from './components/DateList';

function DateScreen() {
  return (
    <ChakraProvider>
      <Box className={styles.boxOut}>
        <Box w="100%" h={'60px'}>
          <HeaderBar title="2023" />
        </Box>
        <Box bg="#E7EAEF" w="100%" h={'78px'}>
          <MonthsBar />
        </Box>
        <Box w="100%" h={'72px'}>
          <Flex className={styles.flex}>
            <Heading as="h1" fontSize={'26px'}>
              {/* fontFamily={'poppinLight'}--> */}
              August 8
            </Heading>
            <AddRequestForm />
          </Flex>
        </Box>
        <DateList />
      </Box>
    </ChakraProvider>
  );
}

export default DateScreen;
