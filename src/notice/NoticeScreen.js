import * as React from 'react';
import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import HeaderBar from '../components/HeaderBar';

import NoticeList from './NoticeList';
import NoticeRequestForm from './NoticeRequestForm';

function NoticeScreen() {
  return (
    <ChakraProvider>
      <Box>
        <HeaderBar title="공지" />
        <Tabs
          m="12px"
          mt="14px"
          px="12px"
          variant="soft-rounded"
          colorScheme="blue"
        >
          <TabList
            h="40px"
            borderRadius="20px"
            bg="gray.100"
            boxShadow="base"
            border="1px solid #BEE3F8"
            pos="relative"
          >
            <Tab>Official</Tab>
            <Tab>InPlace</Tab>
            <Box pos="absolute" right="12px" top="2px">
              <NoticeRequestForm />
            </Box>
          </TabList>
          <TabPanels>
            <TabPanel px="0">
              <Box
                h="40px"
                fontSize="15px"
                fontWeight="600"
                ml="24px"
                color="gray.700"
              >
                <Box display="inline-block">날짜</Box>
                <Box display="inline-block" ml="41px">
                  공지사항
                </Box>
              </Box>
              <NoticeList />
            </TabPanel>
            <TabPanel px="0">
              <Box
                h="40px"
                fontSize="15px"
                fontWeight="600"
                ml="24px"
                color="gray.700"
              >
                <Box display="inline-block">날짜</Box>
                <Box display="inline-block" ml="41px">
                  공지사항
                </Box>
              </Box>
              <NoticeList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ChakraProvider>
  );
}
export default NoticeScreen;
