import { open } from '@tauri-apps/api/shell';

export default function useOpenExternal(): (url: string) => void {
  async function handleOpen(url: string, openWith?: string) {
    if ((window as any).__TAURI__ !== undefined) {
      // @ts-ignore
      await open(url, openWith);
      return;
    }

    window.open(url, '_blank');
  }

  return handleOpen;
}
