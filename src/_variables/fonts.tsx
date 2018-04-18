// Fonts
//
// Font, line-height, and color for body text, headings, and more.

// stylelint-disable value-keyword-case
// $fontFamilySansSerif = -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
// $fontFamilyMonospace =  SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
// $fontFamilyBase = $font-family-sans-serif;
// stylelint-enable value-keyword-case

export const $fontSizeUnit = 'rem';
export const $fontSizeBase = 1; // Assumes the browser default, typically `16px`
export const $fontSizeLg = ($fontSizeBase * 1.25) + $fontSizeUnit; // 20px
export const $fontSizeMd = $fontSizeBase + $fontSizeUnit; // 16px
export const $fontSizeSm = ($fontSizeBase * .875) + $fontSizeUnit; // 14px
export const $fontSizeXs = ($fontSizeBase * .75) + $fontSizeUnit; // 12px

export const $fontWeightLight = 300;
export const $fontWeightNormal = 400;
export const $fontWeightBold = 700;

export const $fontWeightBase = $fontWeightNormal;
export const $lineHeightBase = 1.5;

export const $h1FontSize = $fontSizeBase * 2.5 + $fontSizeUnit;
export const $h2FontSize = $fontSizeBase * 2 + $fontSizeUnit;
export const $h3FontSize = $fontSizeBase * 1.75 + $fontSizeUnit;
export const $h4FontSize = $fontSizeBase * 1.5 + $fontSizeUnit; // 24px
export const $h5FontSize = $fontSizeBase * 1.25 + $fontSizeUnit;
export const $h6FontSize = $fontSizeBase + $fontSizeUnit;