import { memo } from 'react';
import StyledButton from './styled/StyledButton';

export const colors = {
  cultured: '#f8f8f8',
  black: '#000000',
  white: '#FFFFFF'
};
export interface ButtonProps {
  variant: keyof typeof ButtonVariants;
}

interface Props {
  children: React.ReactNode;
}

export enum ButtonVariants {
  'primary',
  'secondary'
}

interface VariantProps {
  border: string;
  background: string;
  color: string;
}
export interface IVariants {
  primary: {
    default: VariantProps;
    hover: VariantProps;
    focus: VariantProps;
    disabled: VariantProps;
  };
  secondary: {
    default: VariantProps;
    hover: VariantProps;
    focus: VariantProps;
    disabled: VariantProps;
  };
}
export const variants: IVariants = {
  primary: {
    default: {
      border: '4px solid rgba(0, 0, 0, 0.1)',
      background: colors.white,
      color: colors.black
    },
    hover: {
      border: '4px solid rgba(0, 0, 0, 0.4)',
      background: colors.white,
      color: colors.black
    },
    focus: {
      border: '4px solid rgba(0, 0, 0, 0.5)',
      background: colors.white,
      color: colors.black
    },
    disabled: {
      border: '4px solid rgba(0, 0, 0, 0.1)',
      background: colors.white,
      color: 'rgba(0, 0, 0, 0.5)'
    }
  },
  secondary: {
    default: {
      border: '4px solid rgba(0, 0, 0, 0.1);',
      color: colors.black,
      background: 'transparent'
    },
    hover: {
      background: 'transparent',
      color: colors.black,
      border: '4px solid rgba(0, 0, 0, 0.4);'
    },
    focus: {
      background: 'transparent',
      border: '4px solid rgba(0, 0, 0, 0.5);',
      color: colors.black
    },
    disabled: {
      background: 'transparent',
      border: '4px solid rgba(0, 0, 0, 0.1);',
      color: 'rgba(0, 0, 0, 0.5)'
    }
  }
};

const Button = ({ children, ...rest }: Props & ButtonProps & React.HTMLAttributes<HTMLElement>) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default memo(Button);
