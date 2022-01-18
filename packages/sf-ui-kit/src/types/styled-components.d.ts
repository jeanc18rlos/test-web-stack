import { IThemeInterface } from '../theme';

import 'styled-components';

// Styled Components
declare module 'styled-components' {
  interface DefaultTheme extends IThemeInterface {}
}
