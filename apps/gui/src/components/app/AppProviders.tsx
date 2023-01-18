import { LocaleProvider } from '@euse/core';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { i18n, defaultLocale, locales } from '../../config/locales';

export type AppProps = {
  outlet?: boolean;
  children?: ReactNode;
};

export default function AppProviders(props: AppProps) {
  const { children, outlet } = props;

  return (
    <LocaleProvider i18n={i18n} defaultLocale={defaultLocale} locales={locales}>
      {outlet ? <Outlet /> : children}
    </LocaleProvider>
  );
}
