import {
  Box,
  Button,
  ColorModeContext,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

const Setting = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack spacing="12px">
      <Box>관리자페이지</Box>
      <Button onClick={toggleColorMode}>
        {' '}
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Box>알림 설정</Box>
      <Box>문의하기</Box>
    </Stack>
  );
};
export default Setting;
