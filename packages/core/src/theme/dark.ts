import { createTheme } from '@mui/material/styles';

import theme from './default';

export default createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    background: {
      ...theme.palette?.background,
      default: '#212121',
      paper: '#333333',
    },
    mode: 'dark',
  },
});
