import { Flex, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { mainColor } from '../../variable';
import monthContents from '../test/monthContents';

const noticeData = [
  { date: '7.22~9.02', content: '프로젝트 디자인 작업1' },
  { date: '9.22~10.02', content: '프로젝트 디자인 작업2' },
  { date: '10.22~12.02', content: '프로젝트 디자인 작업3' },
  { date: '11.22~01.02', content: '프로젝트 디자인 작업4' },
];

const DateList = ({ currentMonthNum }) => {
  const currentMonthContent = monthContents[currentMonthNum - 1];

  return (
    <div>
      {currentMonthContent.map(item => {
        return (
          <Box h={'83px'} borderBottom={'1px solid gray'} padding={'10px'}>
            <Flex
              h={'100%'}
              direction={'column'}
              justifyContent={'space-around'}
            >
              <Text
                fontFamily={'Poppins-Medium'}
                fontSize={'16px'}
                bgClip="text"
                bgGradient={mainColor}
              >
                {item.date}
              </Text>
              <Text fontFamily={'AppleSDGothicNeoM'} fontSize={'16px'}>
                {item.content}
              </Text>
            </Flex>
          </Box>
        );
      })}
    </div>
  );
};

export default DateList;
