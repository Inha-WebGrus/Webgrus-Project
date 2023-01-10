import { extendTheme } from '@chakra-ui/react';
import './index.css';

const theme = extendTheme({
  layerStyles: {
    flexRow: {
      direction: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  textStyles: {
    headerTitle: {
      fontSize: '26px',
      fontWeight: '800',
      color: '#2B6CB0',
      textShadow: '0px 2px #D6D6D6',
      fontFamily: 'Poppins-Medium',
    },
  },
});

export default theme;
