import { Box, Circle, Flex, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import ListScreen from './ListScreen';
import DateRequestForm from './DateRequestForm';

const useMonthBar = () => {
  var month = require('month');
  const [currentMonthNum, setCurrentMonthNum] = useState(month('M') + 1);
  const currentMonthEn = month(currentMonthNum);
  const changeMonth = item => {
    setCurrentMonthNum(item);
  };
  let beforeMonthNum = currentMonthNum - 1;
  let afterMonthNum = currentMonthNum + 1;
  if (beforeMonthNum === 0) beforeMonthNum = 12;
  if (afterMonthNum === 13) afterMonthNum = 1;
  let beforeMonthEn = month(beforeMonthNum);
  let afterMonthEn = month(afterMonthNum);
  const months = [
    { en: beforeMonthEn, num: beforeMonthNum },
    { en: currentMonthEn, num: currentMonthNum },
    { en: afterMonthEn, num: afterMonthNum },
  ];
  return { months, changeMonth, currentMonthNum, currentMonthEn };
};

const MonthScreen = () => {
  const { months, changeMonth, currentMonthNum, currentMonthEn } =
    useMonthBar();
  const monthList = months.map((item, index) => {
    let circleNum = <div>{item.num}</div>;
    if (index === 1) {
      circleNum = (
        <VStack borderX>
          <Circle w="30px" textStyle="bgColorMain" p="auto" color="white">
            {item.num}
          </Circle>
        </VStack>
      );
    }
    return (
      <Flex
        onClick={() => changeMonth(item.num)}
        w="100%"
        direction="column"
        justify="space-around"
        color="gray.700"
      >
        <div>{item.en}</div>
        {circleNum}
      </Flex>
    );
  });
  return (
    <>
      <Flex
        h="90px"
        w="100%"
        py="5px"
        fontSize="20px"
        fontWeight="600"
        color="gray.800"
        bg="gray.100"
        borderBottom="1px solid #E2E8F0"
        justify="space-around"
        textAlign="center"
        pos="relative"
      >
        {monthList}
      </Flex>
      <Box p="12px">
        <Box h="72px" color="gray.700">
          <Flex layerStyle="flexRowBetween" ml="10px" pr="20px" h="100%">
            <Flex fontSize="32px" fontWeight="600">
              <Text mr="8px">{currentMonthEn}</Text>
              <Text>{currentMonthNum}</Text>
            </Flex>
            <DateRequestForm />
          </Flex>
        </Box>
        <ListScreen currentMonthNum={currentMonthNum} />
      </Box>
    </>
  );
};

export default MonthScreen;
