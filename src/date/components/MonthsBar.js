import { Circle, Flex, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

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
  { en: 'Dec', num: 12 },
];

const MonthsBar = () => {
  // const [MonthMiddle, setMonthMiddle] = useState(2);

  // const monthArr = [];
  // useEffect(() => {
  //   const date = new Date();
  //   const temp = date.getMonth() + 1;
  //   console.log('temp', temp);
  //   setMonthMiddle(temp);
  // }, []);
  // let index = MonthMiddle - 1;
  // console.log(MonthMiddle);
  // if (index === 0) monthArr.push([months[11]]);
  // else monthArr.push(months[index - 1]);
  // monthArr.push(months[index]);

  // if (index === 11) monthArr.push(months[0]);
  // else monthArr.push(months[index + 1]);

  // const showMonth = monthArr.map((item, index) => (
  //   <VStack key={index}>
  //     <Text>{item}</Text>
  //     <MonthNum item={item} index={index} />
  //   </VStack>
  // ));

  return <Flex flexDirection="row">showMonth</Flex>;
};
const MonthNum = ({ item, index }) => (
  <>{index === 1 ? <Circle size="40px">{item}</Circle> : <Text>{item}</Text>}</>
);

export default MonthsBar;
