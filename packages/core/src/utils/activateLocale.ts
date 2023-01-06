import type { I18n } from '@lingui/core';
import { invoke } from '@tauri-apps/api';

export default async function activateLocale(i18n: I18n, locale: string) {
  i18n.activate(locale);

  // @ts-ignore
  if (typeof window !== 'undefined' && window.ipcRenderer) {
    await invoke('setLocale', { locale });
  }
}
