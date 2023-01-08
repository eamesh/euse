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
}

const defaultTheme: EmeshThemeOptions = {
  palette: {
    background: {
      default: '#fafafa',
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
