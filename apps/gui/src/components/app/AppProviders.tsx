import {
  LocaleProvider,
  ThemeProvider,
  useDarkMode,
  dark,
  light,
  ErrorBoundary,
  LayoutLoading,
  ModalDialogsProvider,
} from '@euse/core';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Trans } from '@lingui/macro';

import { i18n, defaultLocale, locales } from '../../config/locales';
import LRUsProvider from '../lrus/LRUsProvider';
import AppState from './AppState';

export type AppProps = {
  outlet?: boolean;
  children?: ReactNode;
};

export default function AppProviders(props: AppProps) {
  const { children, outlet } = props;
  const { isDarkMode } = useDarkMode();
  const [isReady, setIsReady] = useState<boolean>(false);

  const theme = isDarkMode ? dark : light;

  async function init() {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <LocaleProvider i18n={i18n} defaultLocale={defaultLocale} locales={locales}>
      <ThemeProvider theme={theme} fonts global>
        <ErrorBoundary>
          <LRUsProvider>
            <ModalDialogsProvider>
              {isReady ? (
                <Suspense fallback={<LayoutLoading />}>
                  <AppState>{outlet ? <Outlet /> : children}</AppState>
                </Suspense>
              ) : (
                <LayoutLoading>
                  <Typography variant="body1">
                    <Trans>Loading configuration</Trans>
                  </Typography>
                </LayoutLoading>
              )}
            </ModalDialogsProvider>
          </LRUsProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </LocaleProvider>
  );
}
