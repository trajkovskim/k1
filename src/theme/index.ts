import { ThemeConfig } from 'antd';

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type PaddingValues = Breakpoints | 'none';

export type BreakpointsProps = {
  [T in Breakpoints]?: number;
};

export const LARGEST_BREAKPOINT: Breakpoints = '3xl';

export const bodyFontSize = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));

export const remToPx = (rem: number) => bodyFontSize * rem;

export const baseTokenConfig: ThemeConfig = {
  components: {
    Layout: {
      headerBg: '#fff',
      footerBg: '#232323',
    },
    Button: {
      colorPrimaryText: '#000',
    },
  },
  token: {
    colorPrimary: '#266431',
    colorLink: '#42a046',
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: remToPx(1),
    padding: 3.2,
  },
};

export const secondaryTokenConfig: ThemeConfig = {
  token: {
    colorPrimary: '#fff',
    colorBgBase: '#232323',
    colorText: '#fff',
    colorLink: '#42a046',
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: remToPx(1),
    padding: 3.2,
  },
};

export default {
  padding: {
    none: '0',
    xs: '3.2px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
    '2xl': '128px',
    '3xl': '160px',
  },
  breakpoints: {
    maxWidth: {
      xs: '30em',
      sm: '48em',
      md: '62em',
      lg: '80em',
      xl: '96em',
      '2xl': '120em',
      '3xl': '160em',
    },
    minWidth: {
      xs: '0em',
      sm: '30.0625em',
      md: '48.0625em',
      lg: '62.0625em',
      xl: '80.0625em',
      '2xl': '96.0625em',
      '3xl': '120.0625em',
    },
  },
  fontSize: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
  },
  controlHeight: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
  },
  button: {
    link: {
      width: 'max-content !important',
      padding: '0',
      height: 'max-content !important',
    },
  },
  layout: {
    header: {
      position: 'sticky',
      top: '0',
      'z-index': '20',
      'padding-right': '0',
      'padding-left': '0',
    },
    nav: {
      'border-inline-end': '0 !important',
    },
    content: {},
    footer: {
      color: '#fff',
    },
  },
};
