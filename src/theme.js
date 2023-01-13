import { extendTheme } from '@chakra-ui/react';
import './index.css';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    bb: 'red',
  },

  layerStyles: {
    flexRowBetween: {
      direction: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  textStyles: {
    bgColorMain: {
      bgGradient: 'linear(to-r, #021B79, #4364F7, #6FB1FC)',
    },
  },
});
//p 12px
//#2B6CB0 navy-color
// #F7FAFC light-gray
// #E2E8F0 border light-gray
export default theme;
