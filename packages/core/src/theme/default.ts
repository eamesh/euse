import { ThemeOptions } from '@mui/material';

declare module '@mui/material' {
  interface Color {
    main: string;
    dark: string;
  }
}

export interface EmeshThemeOptions extends ThemeOptions {
  drawer: {
    width: string;
  };
  palette: ThemeOptions['palette'] & {
    highlight: {
      main: string;
    };
    border: {
      main: string;
      dark: string;
    };
    sidebarBackground: {
      main: string;
      dark: '#505C4E';
    };
    sidebarIconSelected: {
      main: string;
      dark: string;
    };
    sidebarIcon: {
      main: string;
      dark: string;
    };
    sidebarIconHover: {
      main: string;
      dark: string;
    };
  };
}

const defaultTheme: EmeshThemeOptions = {
  palette: {
    background: {
      default: '#F0F3F9',
    },
    primary: {
      main: '#3AAC59', // '#00C853',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    error: {
      main: '#dc3545',
      contrastText: '#ffffff',
    },
    highlight: {
      main: '#00C853',
    },
    border: {
      main: '#E0E0E0',
      dark: '#484747',
    },
    sidebarBackground: {
      main: '#E8F5E9',
      dark: '#505C4E',
    },
    sidebarIconSelected: {
      main: '#1B5E20',
      dark: '#3AAC59',
    },
    sidebarIcon: {
      main: '#9E9E9E',
      dark: '#9E9E9E',
    },
    sidebarIconHover: {
      main: '#424242',
      dark: 'white',
    },
  },
  mixins: {
    toolbar: {
      minHeight: '90px',
    },
  },
  drawer: {
    width: '72px',
  },
  components: {
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: 'large' },
          style: {
            fontSize: '3rem',
          },
        },
        {
          props: { fontSize: 'large' },
          style: {
            fontSize: '2rem',
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h6' },
          style: {
            fontWeight: 400,
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            height: '20px',
            fontSize: '0.75rem',
            '.MuiChip-label': {
              paddingLeft: '6px',
              paddingRight: '6px',
            },
          },
        },
      ],
    },
  },
};

export default defaultTheme;
