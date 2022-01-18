import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../';

const Provider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
export default Provider;
