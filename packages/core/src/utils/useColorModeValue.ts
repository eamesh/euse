import { Theme, PaletteColor } from '@mui/material';

export function getColorModeValue(theme: Theme, color: string): string {
  const isDark = theme.palette.mode === 'dark';
  const palette = (theme.palette as any)[color] as PaletteColor;
  const value = isDark ? palette.dark : palette.light;

  return value ?? palette.main;
}

export default function useColorModeValue(theme: Theme, color: string): string {
  return getColorModeValue(theme, color);
}
