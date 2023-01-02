import * as React from 'react';
import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react';
import HeaderBar from '../components/HeaderBar';
import styles from './DateScreen.module.css';

import AddRequestForm from '../action/AddRequestForm';
import DateList from './components/DateList';
import DateRequestForm from './components/DateRequestForm';

function DateScreen() {
  return (
    <ChakraProvider>
      <Box className={styles.boxOut} position="relative">
        <Box w="100%" h={'60px'}>
          <HeaderBar title="2023" />
        </Box>
        <Box
          bg="#E7EAEF"
          w="100%"
          h={'78px'}
          fontWeight="600"
          textAlign="center"
        >
          기능동작 구현이 생각보다 어려워서 보류중
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
        <DateRequestForm />
      </Box>
    </ChakraProvider>
  );
}

export default DateScreen;
