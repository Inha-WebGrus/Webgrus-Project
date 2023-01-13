import { Box, Flex, Text } from '@chakra-ui/react';

const CategoryItem = ({ title, contentShow }) => {
  return (
    <Flex h="200px" direction="column" mt="10px">
      <Flex justify="space-between">
        <Text fontSize="20px" fontWeight="600" mb="10px">
          {title}
        </Text>
        <Text>모두보기</Text>
      </Flex>
      {contentShow}
    </Flex>
  );
};
const BoxSm = () => <Box w="150px">1</Box>;
const BoxLg = () => (
  <Box bg="yellow" w="800px" h="100%" display="inline-block" mr="2px">
    2
  </Box>
);
const NoticeShow = () => {
  return (
    <Flex direction="column">
      <BoxSm />
      <BoxSm />
      <BoxSm />
      <BoxSm />
    </Flex>
  );
};
const DateShow = () => {
  return (
    <Flex direction="column">
      <BoxSm />
      <BoxSm />
      <BoxSm />
      <BoxSm />
    </Flex>
  );
};
const FoodShow = () => {
  return (
    <Box
      h="100%"
      w="700px"
      whiteSpace="nowrap"
      overflow="auto"
      textAlign="center"
    >
      <BoxLg />
      <BoxLg />
      <BoxLg />
      <BoxLg />
      <BoxLg />
      <BoxLg />
    </Box>
  );
};

const MainCategory = () => {
  return (
    <Flex direction="column" p="20px">
      <CategoryItem title="공지" contentShow={<NoticeShow />} />
      <CategoryItem title="일정" contentShow={<DateShow />} />
      <CategoryItem title="Food" contentShow={<FoodShow />} />
    </Flex>
  );
};
export default MainCategory;
