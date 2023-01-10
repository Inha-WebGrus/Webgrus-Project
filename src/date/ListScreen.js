import { Flex, Text, Box } from '@chakra-ui/react';
import monthContents from './test/monthContents';

const ListScreen = ({ currentMonthNum }) => {
  const currentMonthContent = monthContents[currentMonthNum - 1];

  return (
    <div>
      {currentMonthContent.map(item => {
        return (
          <Box h="84px" borderBottom="1px solid #CBD5E0" p="10px">
            <Flex direction="column" justify="space-around">
              <Text
                fontSize="20px"
                textStyle="fontColorMain"
                fontWeight="600"
                mb="6px"
              >
                {item.date}
              </Text>
              <Text fontSize="18px" fontWeight="600">
                {item.content}
              </Text>
            </Flex>
          </Box>
        );
      })}
    </div>
  );
};

export default ListScreen;
