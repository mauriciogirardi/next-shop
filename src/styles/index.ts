import { createStitches } from "@stitches/react";

export const {
  css,
  theme,
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      green500: "#00875F",
      green300: "#00B37E",
      gray900: "#121214",
      gray800: "#202024",
      gray300: "#C4C4CC",
      gray100: "#E1E1E6",
      white: "#ffffff",
    },

    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xs: "1.5rem",
      "2xl": "2rem",
    },
  },
});
