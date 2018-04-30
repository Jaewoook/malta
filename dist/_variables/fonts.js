// Fonts
//
// Font, line-height, and color for body text, headings, and more.
// stylelint-disable value-keyword-case
// $fontFamilySansSerif = -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
// $fontFamilyMonospace =  SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
// $fontFamilyBase = $font-family-sans-serif;
// stylelint-enable value-keyword-case
export var $fontSizeUnit = "rem";
export var $fontSizeBase = 1; // Assumes the browser default, typically `16px`
export var $fontSizeLg = ($fontSizeBase * 1.25) + $fontSizeUnit; // 20px
export var $fontSizeMd = $fontSizeBase + $fontSizeUnit; // 16px
export var $fontSizeSm = ($fontSizeBase * .875) + $fontSizeUnit; // 14px
export var $fontSizeXs = ($fontSizeBase * .75) + $fontSizeUnit; // 12px
export var $fontWeightLight = 300;
export var $fontWeightNormal = 400;
export var $fontWeightBold = 700;
export var $fontWeightBase = $fontWeightNormal;
export var $lineHeightBase = 1.5;
export var $h1FontSize = $fontSizeBase * 2.5 + $fontSizeUnit;
export var $h2FontSize = $fontSizeBase * 2 + $fontSizeUnit;
export var $h3FontSize = $fontSizeBase * 1.75 + $fontSizeUnit;
export var $h4FontSize = $fontSizeBase * 1.5 + $fontSizeUnit; // 24px
export var $h5FontSize = $fontSizeBase * 1.25 + $fontSizeUnit;
export var $h6FontSize = $fontSizeBase + $fontSizeUnit;
