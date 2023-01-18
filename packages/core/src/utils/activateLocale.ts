import type { I18n } from '@lingui/core';

export default function activateLocale(i18n: I18n, locale?: string) {
  i18n.activate(locale || 'zh-CN');
}
