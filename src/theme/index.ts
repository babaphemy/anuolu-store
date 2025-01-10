import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { brandColors } from '@/theme/brand';

declare module '@mui/material/styles' {
  interface Palette {
    danger: {
      main: string;
    };
    dark: {
      main: string;
    };
  }
  interface PaletteOptions {
    danger?: {
      main: string;
    };
    dark?: {
      main: string;
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    text: {
      primary: brandColors.primary,
      secondary: brandColors.primary,
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    primary: {
      main: brandColors.primary,
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: brandColors.secondary,
      light: brandColors.accent,
      dark: '#FF8C00',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
  } as PaletteOptions,
  typography: {
    fontSize: 12,
  } as TypographyOptions,
};
const theme: Theme = createTheme(themeOptions);

export default theme;
