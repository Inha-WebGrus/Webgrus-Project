import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import noticeListTest from '../test/NoticeListTest';

const NoticeItem = ({ date, title, content, index }) => {
  return (
    <AccordionItem
      bg={`${index}` % 2 ? '#FFFFFF' : '#EDF2F7'}
      borderTop="0.5px solid #E2E8F0"
    >
      <AccordionButton paddingLeft="0">
        <Box flex="1" textAlign="left">
          <Flex>
            <Box textAlign={'center'} width={'80px'} fontWeight="600">
              {date}
            </Box>
            <Box flex={1} fontWeight="400">
              {title}
            </Box>
          </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel
        paddingLeft={'0'}
        paddingRight={'40px'}
        pb={4}
        fontWeight="medium"
      >
        <Flex>
          <Box width={'80px'}></Box>
          <Box flex={1}>{content}</Box>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

function NoticeList() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    setDataList(dataList => [...dataList, ...noticeListTest]);
  }, []);
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {dataList.map((list, index) => (
        <NoticeItem
          key={index}
          date={list.date}
          title={list.title}
          content={list.content}
          index={index}
        ></NoticeItem>
      ))}
    </Accordion>
  );
}

export default NoticeList;
