import { createTheme } from '@mui/material';

import theme from './default';

export default createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    background: {
      default: '#212121',
      paper: '#333333',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    mode: 'dark',
  },
} as any);
