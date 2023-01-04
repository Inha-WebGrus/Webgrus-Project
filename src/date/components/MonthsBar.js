import { Box, Circle, Flex, Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import AddRequestForm from '../../action/AddRequestForm';
import styles from '../components/css/MonthsBar.module.css';
import DateList from './DateList';
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

  if (beforeMonthNum === 0) {
    beforeMonthNum = 12;
  }
  if (afterMonthNum === 13) afterMonthNum = 1;
  let beforeMonthEn = month(beforeMonthNum);
  let afterMonthEn = month(afterMonthNum);
  const months = [
    { en: beforeMonthEn, num: beforeMonthNum },
    { en: currentMonthEn, num: currentMonthNum },
    { en: afterMonthEn, num: afterMonthNum },
  ];

  return { months, changeMonth, currentMonthNum };
};

const MonthsBar = () => {
  const { months, changeMonth, currentMonthNum } = useMonthBar();

  const monthList = months.map((item, index) => {
    let circleNum = <div>{item.num}</div>;
    if (index === 1) {
      circleNum = (
        <VStack>
          <Circle className={styles.textCircle}>{item.num}</Circle>
        </VStack>
      );
    }
    return (
      <Flex
        onClick={() => changeMonth(item.num)}
        className={styles.monthBar__item}
      >
        <div>{item.en}</div>

        {circleNum}
      </Flex>
    );
  });
  return (
    <>
      <Flex className={styles.monthBar}>{monthList}</Flex>
      <Box w="100%" h={'72px'}>
        <Flex className={styles.flex}>
          <Heading as="h1" fontSize={'26px'}>
            {/* fontFamily={'poppinLight'}--> */}
            August 8
          </Heading>
          <AddRequestForm />
        </Flex>
      </Box>
      <DateList currentMonthNum={currentMonthNum} />
      <DateRequestForm />
    </>
  );
};
export default MonthsBar;
