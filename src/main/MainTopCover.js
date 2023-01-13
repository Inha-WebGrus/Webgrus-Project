import { Box, Text } from '@chakra-ui/react';
import MenuDrawer from '../components/MenuDrawer';

const MainTopCover = () => {
  return (
    <Box p="20px" h="320px" textStyle="bgColorMain" pos="relative">
      <MenuDrawer color="white" />
      <Box
        color="white"
        fontWeight="600"
        fontSize="64px"
        pos="absolute"
        top="108px"
        left="40px"
      >
        In place
      </Box>
    </Box>
  );
};

export default MainTopCover;
