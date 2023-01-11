import { Box, Flex, Text } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import MenuDrawer from './MenuDrawer';

const HeaderBar = ({ title }) => {
  return (
    <Flex
      borderBottom="1px solid #E2E8F0"
      layerStyle="flexRowBetween"
      h="60px"
      px="27px"
    >
      <Box as="button">
        <MenuDrawer />
      </Box>
      <Text textStyle="headerTitle">{title}</Text>
      <Box as="button">
        <SettingsIcon boxSize={5} opacity="0.8" />
      </Box>
    </Flex>
  );
};

export default HeaderBar;
