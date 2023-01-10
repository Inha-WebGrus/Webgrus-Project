import { Box, Flex, Spacer } from '@chakra-ui/react';
import AddRequestForm from '../../date/DateRequestForm';

import styles from './CategoryBar.module.css';

const CategoryBar = () => (
  <Flex className={styles.flex}>
    <Box as="button" className={styles.box}>
      All
    </Box>
    <div>officiall</div>
    <div>etc</div>
    <Spacer></Spacer>
    <AddRequestForm />
  </Flex>
);

export default CategoryBar;
