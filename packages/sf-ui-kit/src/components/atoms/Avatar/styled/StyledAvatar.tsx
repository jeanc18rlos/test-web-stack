import styled from 'styled-components';
import { rem } from 'polished';

const StyledAvatar = styled.figure`
  max-width: ${rem('168px')};
  max-height: ${rem('168px')};
  min-width: ${rem('168px')};
  min-height: ${rem('168px')};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}em) {
    max-width: ${rem('120px')};
    max-height ${rem('120px')};
    min-width: ${rem('120px')};
    min-height ${rem('120px')};
  }
  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    max-width: ${rem('80px')};
    max-height ${rem('80px')};
    min-width: ${rem('120px')};
    min-height ${rem('120px')};
  }
  img {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
  }
`;

export default StyledAvatar;
