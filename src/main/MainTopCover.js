import { Box, Text } from '@chakra-ui/react';
import MenuDrawer from '../components/MenuDrawer';

const MainTopCover = () => {
  return (
    <Box p="20px" h="320px" textStyle="bgColorMain">
      <MenuDrawer color="white" />
      <Text color="white" fontWeight="600" fontSize="64px" marginY="100px">
        In place
      </Text>
    </Box>
  );
};

export default MainTopCover;
