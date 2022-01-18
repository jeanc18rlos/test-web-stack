import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.cultured};
      * {
        font-family: Source Sans Pro, sans-serif
      }
`;
