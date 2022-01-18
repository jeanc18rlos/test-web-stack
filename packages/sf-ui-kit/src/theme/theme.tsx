interface IColors {
  cultured: string;
  white: string;
  black: string;
}

interface IFonts {
  primaryFont: string;
}

interface IFlexboxgrid {
  gridSize: number;
  gutterWidth: number;
  outerMargin: number;
  mediaQuery: string;
  container: IContainer;
  breakpoints: IBreakpoints;
}
interface IContainer {
  sm: number;
  md: number;
  lg: number;
}
interface IBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}
export interface IThemeInterface {
  colors: IColors;
  fonts: IFonts;
  flexboxgrid: IFlexboxgrid;
}

export const colors: IColors = {
  cultured: '#f8f8f8',
  black: '#000000',
  white: '#FFFFFF'
};

const theme: IThemeInterface = {
  colors,
  flexboxgrid: {
    // Defaults
    breakpoints: {
      lg: 75, // em
      md: 64, // em
      sm: 48, // em
      xs: 0 // em
    },
    container: {
      lg: 76, // rem
      md: 61, // rem
      sm: 46 // rem
    },
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    mediaQuery: 'only screen',
    outerMargin: 2 // rem
  },

  fonts: {
    primaryFont: 'Source Sans Pro, sans-serif'
  }
};

export default theme;
