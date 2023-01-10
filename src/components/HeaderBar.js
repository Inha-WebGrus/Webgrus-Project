import { Box, Flex, Text } from '@chakra-ui/react';
import MenuDrawerBtn from '../action/MenuDrawerBtn';
import { SettingsIcon } from '@chakra-ui/icons';

const HeaderBar = ({ title }) => {
  return (
    <Flex layerStyle="flexRow" h="60px" px="27px">
      <Box as="button">
        <MenuDrawerBtn />
      </Box>
      <Text textStyle="headerTitle">{title}</Text>
      <Box as="button">
        <SettingsIcon boxSize={5} opacity="0.8" />
      </Box>
    </Flex>
  );
};

export default HeaderBar;
