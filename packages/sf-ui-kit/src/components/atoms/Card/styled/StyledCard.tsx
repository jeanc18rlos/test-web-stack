import styled from 'styled-components';
import { rem } from 'polished';

const StyledCard = styled('section')`
  display: flex;
  flex-direction: column;
  width: ${rem('400px')};
  height: ${rem('336px')};
  padding: ${rem('16px')};
  min-width: fit-content;
  min-height: fit-content;
  background: #ffffff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));
  transition: filter 0.25s ease-in-out;
  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.lg}em) {
    width: ${rem('320px')};
    height: ${rem('269px')};
  }
  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}em) {
    width: ${rem('280px')};
    height: ${rem('236px')};
  }
  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    width: ${rem('256px')};
    height: ${rem('216px')};
  }
  &:hover,
  &:focus,
  &.focus,
  &.hover {
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  }
`;

export default StyledCard;
