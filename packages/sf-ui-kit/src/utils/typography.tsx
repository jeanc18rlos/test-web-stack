import { css } from 'styled-components';
import { rem } from 'polished';

export const sizes = {
  h1: {
    size: `${rem('48px')}`,
    height: `${rem('60px')}`,
    weight: 300,
    style: 'normal'
  },
  h2: {
    size: `${rem('21px')}`,
    height: `${rem('26px')}`,
    weight: 600,
    style: 'normal'
  },
  body: {
    size: `${rem('16px')}`,
    height: `${rem('20px')}`,
    weight: 300,
    style: 'normal'
  }
};

enum Base {
  'h1',
  'h2',
  'body'
}

interface Options {
  size?: string;
  height?: number;
  weight?: number | string;
  style?: string;
  spacing?: string;
  color?: string;
  family?: string;
}

export const Typography = ({ base, options }: { base: keyof typeof Base; options?: Options }): any => css`
  font-feature-settings: 'cpsp' on;
  font-size: ${options && options.size ? options.size : sizes[base].size};
  line-height: ${options && options.height ? options.height : sizes[base].height};
  font-weight: ${options && options.weight ? options.weight : sizes[base].weight};
  font-style: ${options && options.style ? options.style : sizes[base].style};
  ${options && options.spacing && `letter-spacing: ${options && options.spacing};`}
  color: ${({ theme }) => (options && options.color ? options.color : theme.colors.black)};
  font-family: ${({ theme }) => (options && options.family ? options.family : theme.fonts.primaryFont)};
`;
