import { ReactNode } from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '../theme';

const themed = (component: ReactNode): renderer.ReactTestRenderer =>
  renderer.create(<ThemeProvider>{component}</ThemeProvider>);

export { themed };
