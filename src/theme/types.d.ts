import { GlobalToken } from 'antd';
import 'styled-components';
import theme from 'theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    antd: GlobalToken;
  }
}
