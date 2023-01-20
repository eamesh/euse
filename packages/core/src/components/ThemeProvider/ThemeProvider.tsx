import { ReactNode, useMemo } from 'react';
import { ThemeProvider as MaterialThemeProvider, createTheme, CssBaseline, ThemeOptions } from '@mui/material';
import { Global, css } from '@emotion/react';
import * as materialLocales from '@mui/material/locale';
import useLocale from '../../hooks/useLocale';
import Fonts from '../Fonts';

export function getMaterialLocale(locale: string) {
  if (!locale) {
    return materialLocales.zhCN;
  }

  const materialLocale = locale.replace('-', '');
  return (materialLocales as any)[materialLocale] ?? materialLocales.zhCN;
}

export type ThemeProviderProps = {
  children: ReactNode;
  theme: ThemeOptions;
  fonts?: boolean;
  global?: boolean;
};

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body,
        #root {
          height: 100%;
        }

        #root {
          display: flex;
          flex-direction: column;
        }

        ul .MuiBox-root {
          outline: none;
        }
      `}
    />
  );
};

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme, global = false, fonts = false } = props;
  const [locale] = useLocale();
  const finalTheme = useMemo(() => {
    const localisedTheme = getMaterialLocale(locale);
    return createTheme(theme, localisedTheme);
  }, [theme, locale]);

  return (
    <MaterialThemeProvider theme={finalTheme}>
      <>
        <CssBaseline />
        {global && <GlobalStyle />}
        {fonts && <Fonts />}
        {children}
      </>
    </MaterialThemeProvider>
  );
}
