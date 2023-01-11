import { extendTheme } from '@chakra-ui/react';
import './index.css';

const theme = extendTheme({
  layerStyles: {
    flexRowBetween: {
      direction: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  textStyles: {
    headerTitle: {
      fontSize: '28px',
      fontWeight: '800',
      bgClip: 'text',
      bgGradient: 'linear(to-r, #021B79, #4364F7, #6FB1FC)',
      fontFamily: 'Poppins-Medium',
    },
    fontColorMain: {
      bgClip: 'text',
      bgGradient: 'linear(to-r, #021B79, #4364F7, #6FB1FC)',
    },
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
