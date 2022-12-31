import { Flex, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

const noticeData = [
  { date: '7.22~8.02', content: '프로젝트 디자인 작업' },
  { date: '7.22~8.02', content: '프로젝트 디자인 작업' },
  { date: '7.22~8.02', content: '프로젝트 디자인 작업' },
  { date: '7.22~8.02', content: '프로젝트 디자인 작업' },
];

const NoticeLI = () => {
  const [newNotice, setNoticeList] = useState(noticeData);
  return (
    <div>
      {newNotice.map(item => {
        return (
          <Box h={'83px'} borderBottom={'1px solid gray'} padding={'10px'}>
            <Flex
              h={'100%'}
              direction={'column'}
              justifyContent={'space-around'}
            >
              <Text fontFamily={'Poppins-Medium'} fontSize={'16px'}>
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

export default NoticeLI;
