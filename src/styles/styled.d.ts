import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        title: string;
        subtitle: string;
        hint: string;
        black: string;
        white: string;
        sun: string;
        moon: string;
        error: string;
    }
  }
}