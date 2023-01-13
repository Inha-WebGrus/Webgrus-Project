import { Box } from '@chakra-ui/react';
import HeaderBar from '../components/HeaderBar';
import MonthScreen from './MonthScreen';

function DateScreen() {
  return (
    <Box minHeight="10vh" pos="relative">
      <HeaderBar title="2023" />
      <MonthScreen />
    </Box>
  );
}

export default DateScreen;
