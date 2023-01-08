import {
  LocaleProvider,
  ThemeProvider,
  useDarkMode,
  dark,
  light,
  ErrorBoundary,
  ModalDialogsProvider,
  ModalDialogs,
  LayoutHero,
  LayoutLoading,
} from '@euse/core';
import { Trans } from '@lingui/macro';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppState from './AppState';

import { i18n, defaultLocale, locales } from '../../config/locales';
import LRUsProvider from '../lrus/LRUsProvider';
import { Typography } from '@mui/material';

type AppProviderProps = {
  outlet?: boolean;
  children?: ReactNode;
};

export default function AppProviders(props: AppProviderProps) {
  const { children, outlet } = props;
  const { isDarkMode } = useDarkMode();
  const [isReady, setIsReady] = useState<boolean>(false);

  const theme = isDarkMode ? dark : light;

  async function init() {
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
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
                <Suspense fallback={<LayoutHero />}>
                  <AppState>{outlet ? <Outlet /> : children}</AppState>
                </Suspense>
              ) : (
                <LayoutLoading>
                  <Typography variant="body1">
                    <Trans>Loading configuration</Trans>
                  </Typography>
                </LayoutLoading>
              )}
              <ModalDialogs />
            </ModalDialogsProvider>
          </LRUsProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </LocaleProvider>
  );
}
