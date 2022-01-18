import { rem } from 'polished';
import styled from 'styled-components';
import { Typography } from '../../../../';

const StyledInput = styled.div`
  width: 100%;
  input {
    width: 100%;
  }

  input[type='text'] {
    ${() =>
      Typography({
        base: 'body',
        options: { weight: 400, color: '#171717' }
      })};
    display: flex;
    padding: ${rem('16px')};
    margin: ${rem('8px')} 0;
    box-sizing: border-box;
    border-radius: ${rem('8px')};
    transition: 0.1s;
    outline: none;
    height: ${rem('64px')};
    border: 1px solid rgba(0, 0, 0, 0.1);
    @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.lg}em) {
      padding: ${rem('12px')};
      height: ${rem('50px')};
    }
    @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}em) {
      padding: ${rem('12px')};
      height: ${rem('40px')};
    }

    &::placeholder {
      font-weight: 300;
    }
  }

  label {
    ${() =>
      Typography({
        base: 'body',

        options: { height: 1.25, weight: 600 }
      })};
  }
`;

export default StyledInput;
