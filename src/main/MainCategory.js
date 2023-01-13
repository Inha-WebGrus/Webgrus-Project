import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import monthContents from '../date/test/monthContents';
import FoodShow from './FoodShow';

const CategoryItem = ({ title, contentShow }) => {
  let pageLink = '/';
  if (title === '공지') pageLink = '/notice';
  else if (title === '일정') pageLink = '/date';
  else if (title === '음식') pageLink = '/food_intro';

  return (
    <Flex h="240px" direction="column" mb="5px">
      <Flex justify="space-between">
        <Text fontSize="18px" fontWeight="600" mb="5px">
          {title}
        </Text>
        <Link to={pageLink}>모두 보기</Link>
      </Flex>
      {contentShow}
      <hr />
    </Flex>
  );
};
const BoxSm = () => (
  <Box fontSize="14px">공지입니다 공지입니다공지입니다공지입니다</Box>
);

const NoticeShow = () => {
  return (
    <Flex direction="column" justify="space-between" h="100%" py="8px">
      <BoxSm />
      <BoxSm />
      <BoxSm />
      <BoxSm />
    </Flex>
  );
};
const DateShow = () => {
  return (
    <Flex direction="column" justify="space-between" h="100%" py="8px">
      <BoxSm />
      <BoxSm />
      <BoxSm />
      <BoxSm />
    </Flex>
  );
};

const MainCategory = () => {
  return (
    <Flex direction="column" p="20px" pt="12px">
      <CategoryItem title="음식" contentShow={<FoodShow />} />
      <CategoryItem title="공지" contentShow={<NoticeShow />} />

      <CategoryItem title="일정" contentShow={<DateShow />} />
    </Flex>
  );
};
export default MainCategory;
