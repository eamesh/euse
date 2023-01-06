import { LocaleProvider, ThemeProvider, useDarkMode, dark, light, ErrorBoundary } from '@euse/core';
import { ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppState from './AppState';

import { i18n, defaultLocale, locales } from '../../config/locales';

type AppProviderProps = {
  outlet?: boolean;
  children?: ReactNode;
};

export default function AppProviders(props: AppProviderProps) {
  const { children, outlet } = props;
  const { isDarkMode } = useDarkMode();

  const theme = isDarkMode ? dark : light;

  return (
    <LocaleProvider i18n={i18n} defaultLocale={defaultLocale} locales={locales}>
      <ThemeProvider theme={theme} fonts global>
        <ErrorBoundary>
          <Suspense>
            <AppState>{outlet ? <Outlet /> : children}</AppState>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </LocaleProvider>
  );
}
