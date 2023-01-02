import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import styles from './NoticeScreen.module.css';
import HeaderBar from '../components/HeaderBar';
import CategoryBar from './component/CategoryBar';
import NoticeList from './component/NoticeList';
import NoticeRequestForm from './component/NoticeRequestForm';

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
        <Box height="40px" fontWeight="600">
          <Box display="inline-block" marginLeft="24px">
            날짜
          </Box>
          <Box display="inline-block" marginLeft="24px">
            공지사항
          </Box>
        </Box>
        <NoticeList />
        <NoticeRequestForm />
      </Box>
    </ChakraProvider>
  );
}
export default NoticeScreen;
