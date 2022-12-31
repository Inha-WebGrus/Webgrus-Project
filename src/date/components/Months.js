import { Box, Text, Flex, VStack, Spacer, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import styles from './css/Months.module.css';

const months = [
  { en: 'Jan', num: 1 },
  { en: 'Feb', num: 2 },
  { en: 'Mar', num: 3 },
  { en: 'Apr', num: 4 },
  { en: 'May', num: 5 },
  { en: 'Jun', num: 6 },
  { en: 'Jul', num: 7 },
  { en: 'Aug', num: 8 },
  { en: 'Sep', num: 9 },
  { en: 'Oct', num: 10 },
  { en: 'Nov', num: 11 },
];

const MonthsBar = () => {
  const [showMonth, setShowMonth] = useState([
    { en: 'Sep', num: 9 },
    { en: 'Oct', num: 10 },
    { en: 'Nov', num: 11 },
  ]);
  const onClick = event => {
    const index = event.currentTarget.getAttribute('index');
    const num = event.currentTarget.getAttribute('num');
    const nextNum = num === 11 ? 1 : num + 1;
    const prevNum = num === 1 ? 11 : num - 1;
    if (index === String(2)) {
      setShowMonth(arr => [arr[1], arr[2], arr[nextNum - 1]]);
    } else if (index === String(0)) {
      setShowMonth(arr => [arr[prevNum - 1], arr[0], arr[1]]);
    }
  };

  return (
    <div>
      <Flex justifyContent="space-between">
        {showMonth.map((item, index) => (
          <Box
            num={item.num}
            index={index}
            flex={1}
            textAlign={'center'}
            fontSize={'17px'}
            color={'#636773'}
            onClick={onClick}
          >
            <VStack justifyContent={'center'} spacing={'3'} h={'100%'}>
              <Text>{item.en}</Text>
              <Text>{item.num}</Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default MonthsBar;
