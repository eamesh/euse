import { usePrefs } from '@euse/api-react';
import type { I18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { useMemo, createContext, useCallback, ReactNode, useEffect } from 'react';

import activateLocale from '../../utils/activateLocale';

export interface LocaleContextSchema {
  defaultLocale: string;
  locales: {
    locale: string;
    label: string;
  }[];
  locale: string;
  setLocale: (locale: string) => void;
}

export const LocaleContext = createContext<LocaleContextSchema | undefined>(undefined);

export type LocaleProviderProps = {
  i18n: I18n;
  defaultLocale: string;
  locales: {
    locale: string;
    label: string;
  }[];
  children?: ReactNode;
};

export default function LocaleProvider(props: LocaleProviderProps) {
  const { children, i18n, locales, defaultLocale } = props;

  let [locale, setLocale] = usePrefs<string>('locale', defaultLocale);
  if (typeof locale !== 'string' || (locale && locale.length === 2)) {
    locale = defaultLocale;
  }

  const handleSetLocale = useCallback(
    (localeLocal: string) => {
      if (typeof localeLocal !== 'string') {
        throw new Error(`Locale ${locales} is not a string`);
      }
      setLocale(localeLocal);
    },
    [setLocale]
  );

  const context = useMemo(
    () => ({
      locales,
      defaultLocale,
      locale,
      setLocale: handleSetLocale,
    }),
    [locales, defaultLocale, locale, handleSetLocale]
  );

  // prepare default locale
  useMemo(() => {
    activateLocale(i18n, defaultLocale);
  }, []);

  useEffect(() => {
    activateLocale(i18n, locale as string);
  }, [locale]);

  return (
    <LocaleContext.Provider value={context as LocaleContextSchema}>
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    </LocaleContext.Provider>
  );
}