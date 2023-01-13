import { Box } from '@chakra-ui/react';
import MainCategory from './MainCategory';
import MainTopCover from './MainTopCover';

const MainScreen = () => {
  return (
    <Box>
      <MainTopCover />
      <MainCategory />
    </Box>
  );
};
export default MainScreen;
