import { locales as coreLocales } from '@euse/core';
import { i18n } from '@lingui/core';
import { zh } from 'make-plural/plurals';

import * as guiLocales from '../locales';

export const defaultLocale = 'zh-CN';

// https://www.codetwo.com/admins-blog/list-of-office-365-language-id/
// https://www.venea.net/web/culture_code
export const locales = [
  {
    locale: 'zh-CN',
    label: '简体中文',
  },
];

i18n.loadLocaleData('zh-CN', { plurals: zh });

locales.forEach(({ locale }) => {
  const importName = locale.replace('-', '');

  const messages = {
    ...(coreLocales as any)[importName].messages,
    ...(guiLocales as any)[importName].messages,
  };

  i18n.load(locale, messages);
});

export { i18n };
