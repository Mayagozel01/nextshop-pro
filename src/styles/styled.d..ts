import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white_0: string;
      text: string;
      muted: string;
      border: string;
      black_1: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    fontSizes: {
      h1: string;
      h2: string;
      body: string;
      small: string;
      regular_14: string;
      regular_15: string;
    };
    radii: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
