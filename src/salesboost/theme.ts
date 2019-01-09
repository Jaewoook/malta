export const breakpoints = ["600px", "1200px"];

export const colors = {
  white: {
    standard: "#ffffff",
    _75: "rgba(255, 255, 255, 0.75)",
    _50: "rgba(255, 255, 255, 0.5)",
  },
  blue: {
    royal: "#454edf",
    deep: "#161fba",
    dark: "#030c90",
  },
  black: {
    dark: "rgba(22, 27, 72, 0.9)",
    standard: "rgba(22, 27, 72, 0.8)",
    sub: "rgba(22, 27, 72, 0.6)",
    half: "rgba(22, 27, 72, 0.5)",
    hint: "rgba(22, 27, 72, 0.4)",
    _20: "rgba(22, 27, 72, 0.2)",
    _10: "rgba(22, 27, 72, 0.1)",
    _8: "rgba(22, 27, 72, 0.08)",
    _5: "rgba(22, 27, 72, 0.05)",
    _4: "rgba(22, 27, 72, 0.04)",
    _3: "rgba(22, 27, 72, 0.03)",
  },
  red: "#f51a1a",
  yellow: "#f5a921",
  green: "#059d5b",
  mint: "#23c1a6"
};

export const fontsizes = {
  h1: 40,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
};

export const fontweights = {
  medium: 500,
  regular: 400,
  demilight: 300,
  light: 200,
};

export const fontfamilies = {
  sans: "noto sans kr, arial, sans-serif"
};

export const space = [0, 8, 16, 32, 64, 128];

export const lineheights = [1, 1.4, 1.6, 2];

export const letterspacings = ["1px", "2px", "4px", "8px"];

export const borders = [0, 1, 2, 3, 4, 5];

export const radii = [0, 2, 4, 8, 16, 32];

export const shadows = [
  "none",
  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
];

export const theme = {
  breakpoints,
  colors,
  fontsizes,
  fontweights,
  fontfamilies,
  space,
  shadows,
  lineheights,
  letterspacings,
  borders,
  radii,
};
