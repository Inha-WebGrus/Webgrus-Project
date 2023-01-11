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
import noticeListTest from './test/NoticeListTest';

const NoticeItem = ({ date, title, content, index }) => {
  return (
    <AccordionItem
      bg={`${index}` % 2 ? '#FFFFFF' : 'gray.100'}
      borderTop="1px solid gray.100"
    >
      <AccordionButton px="0" layerStyle="flexRowBetween">
        <Flex textStyle="flexRowBetween">
          <Box width={'80px'} fontWeight="600">
            {date}
          </Box>
          <Box flex={1} pl="5px">
            {title}
          </Box>
        </Flex>

        <AccordionIcon color="gray.500" />
      </AccordionButton>
      <AccordionPanel pl="0" pr="40px" py="8px" fontWeight="200">
        <Flex>
          <Box w={'80px'}></Box>
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
