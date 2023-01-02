import { Box, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import styles from './HeaderBar.module.css';
import MenuDrawerBtn from '../action/MenuDrawerBtn';
import { headerColor } from '../variable';

const HeaderBar = ({ title }) => {
  return (
    <Flex className={styles.flexTitle}>
      <Box as="button">
        <MenuDrawerBtn />
      </Box>
      <Text
        fontSize="24px"
        textShadow="0px 2px #D6D6D6"
        fontWeight="800"
        color={headerColor}
      >
        {title}
      </Text>
      <Box as="button">
        <Icon icon="entypo:dots-three-horizontal" height="31" width="27" />
      </Box>
    </Flex>
  );
};

export default HeaderBar;
