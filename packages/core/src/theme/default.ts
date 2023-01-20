import { ThemeOptions, PaletteColorOptions, PaletteColor } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    drawer: {
      width: string;
    };
  }

  interface Palette {
    border?: Palette['primary'];
    highlight?: Palette['primary'];
    sidebarBackground?: Palette['primary'];
    sidebarIconSelected?: Palette['primary'];
    sidebarIconHover?: Palette['primary'];
    sidebarIcon?: Palette['primary'];
  }

  interface PaletteOptions {
    border?: PaletteOptions['primary'];
    highlight?: PaletteOptions['primary'];
    sidebarBackground?: PaletteOptions['primary'];
    sidebarIconSelected?: PaletteOptions['primary'];
    sidebarIconHover?: PaletteOptions['primary'];
    sidebarIcon?: PaletteOptions['primary'];
  }

  interface ThemeOptions {
    drawer: {
      width: string;
    };
  }
}

const defaultThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Microsoft YaHei"',
    ].join(','),
  },
  palette: {
    background: {
      default: '#fafafa',
    },
    border: {
      main: '#E0E0E0',
      dark: '#484747',
      light: '#E0E0E0',
    },
    highlight: {
      main: '#00C853',
    },
    sidebarBackground: {
      main: '#E8F5E9',
      dark: '#505C4E',
    },
    sidebarIconSelected: {
      main: '#1B5E20',
      dark: '#3AAC59',
      light: '#1B5E20',
    },
    sidebarIcon: {
      main: '#9E9E9E',
      dark: '#9E9E9E',
      light: '#9E9E9E',
    },
    sidebarIconHover: {
      main: '#424242',
      dark: 'white',
      light: '#424242',
    },
  },
  drawer: {
    width: '72px',
  },
  mixins: {
    toolbar: {
      minHeight: '90px',
    },
  },
};

export default defaultThemeOptions;
