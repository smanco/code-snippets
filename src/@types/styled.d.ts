// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bodyFonts: string;
    background: string;
    color: string;
    primary: Record<number, string>;
    secondary: Record<number, string>;
    dark: string;
  }
}
