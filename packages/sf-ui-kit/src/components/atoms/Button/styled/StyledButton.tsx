import styled, { css, StyledComponent } from 'styled-components';
import { ButtonProps, variants } from '../Button';
import { rem } from 'polished';
import { Typography, IThemeInterface } from '../../../../';
import { HTMLAttributes } from 'react';

const baseStyles = ({ variant }: ButtonProps) => css`
  cursor: pointer;
  border-radius: ${rem('8px')};
  display: flex;

  justify-content: center;
  align-items: center;
  transition: background, border, color 0.25s ease-in-out;
  padding: ${rem('11px')} ${rem('14px')};
  max-width: 100%;
  max-height: 100%;

  min-width: fit-content;
  min-height: fit-content;
  width: ${rem('200px')};
  height: ${rem('70px')};

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    width: ${rem('150px')};
    height: ${rem('60px')};
  }
  ${() =>
    Typography({
      base: 'body',
      options: {
        weight: 600
      }
    })};
  text-transform: uppercase;
  border: ${variants[variant].default.border};
  color: ${variants[variant].default.color};
  background: ${variants[variant].default.background};
  &.hover,
  &:hover {
    border: ${variants[variant].hover.border};
    color: ${variants[variant].hover.color};
    background: ${variants[variant].hover.background};
  }
  &.focus,
  &:focus {
    border: ${variants[variant].focus.border};
    color: ${variants[variant].focus.color};
    background: ${variants[variant].focus.background};
  }
  &.disabled {
    pointer-events: none;
    border: ${variants[variant].disabled.border};
    color: ${variants[variant].disabled.color};
    background: ${variants[variant].disabled.background};
  }
`;

export const StyledButton: StyledComponent<
  'button',
  IThemeInterface,
  ButtonProps & HTMLAttributes<HTMLElement>,
  never
> = styled.button`
  ${({ variant }: ButtonProps) => baseStyles({ variant })}
`;

export default StyledButton;
