import { createGlobalStyle } from 'styled-components';

import { Typography } from '../utils';

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.cultured};
    ${() =>
      Typography({
        base: 'body'
      })};

      * {
        font-family: Source Sans Pro, sans-serif
      }
`;
