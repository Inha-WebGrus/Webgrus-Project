import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import styles from './NoticeScreen.module.css';
import HeaderBar from '../components/HeaderBar';
import CategoryBar from './component/CategoryBar';
import NoticeList from './component/NoticeList';

function NoticeScreen() {
  return (
    <ChakraProvider>
      <Box className={styles.boxOut}>
        <Box w="100%" h={'60px'}>
          <HeaderBar title="공지" />
        </Box>
        <Box className={styles.boxTap}>
          <CategoryBar />
        </Box>
        <NoticeList />
      </Box>
    </ChakraProvider>
  );
}
export default NoticeScreen;
