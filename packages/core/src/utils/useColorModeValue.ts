import { Theme } from '@mui/material';

export function getColorModeValue(theme: Theme, color: string): string {
  const isDark = theme.palette.mode === 'dark';

  const value = isDark ? (theme.palette as any)[color].dark : (theme.palette as any)[color].light;

  return value ?? (theme.palette as any)[color].main;
}

export default function useColorModeValue(theme: Theme, color: string): string {
  return getColorModeValue(theme, color);
}
