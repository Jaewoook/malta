"use strict";
// Fonts
//
// Font, line-height, and color for body text, headings, and more.
Object.defineProperty(exports, "__esModule", { value: true });
// stylelint-disable value-keyword-case
// $fontFamilySansSerif = -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
// $fontFamilyMonospace =  SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
// $fontFamilyBase = $font-family-sans-serif;
// stylelint-enable value-keyword-case
exports.$fontSizeUnit = "rem";
exports.$fontSizeBase = 1; // Assumes the browser default, typically `16px`
exports.$fontSizeLg = (exports.$fontSizeBase * 1.25) + exports.$fontSizeUnit; // 20px
exports.$fontSizeMd = exports.$fontSizeBase + exports.$fontSizeUnit; // 16px
exports.$fontSizeSm = (exports.$fontSizeBase * .875) + exports.$fontSizeUnit; // 14px
exports.$fontSizeXs = (exports.$fontSizeBase * .75) + exports.$fontSizeUnit; // 12px
exports.$fontWeightLight = 300;
exports.$fontWeightNormal = 400;
exports.$fontWeightBold = 700;
exports.$fontWeightBase = exports.$fontWeightNormal;
exports.$lineHeightBase = 1.5;
exports.$h1FontSize = exports.$fontSizeBase * 2.5 + exports.$fontSizeUnit;
exports.$h2FontSize = exports.$fontSizeBase * 2 + exports.$fontSizeUnit;
exports.$h3FontSize = exports.$fontSizeBase * 1.75 + exports.$fontSizeUnit;
exports.$h4FontSize = exports.$fontSizeBase * 1.5 + exports.$fontSizeUnit; // 24px
exports.$h5FontSize = exports.$fontSizeBase * 1.25 + exports.$fontSizeUnit;
exports.$h6FontSize = exports.$fontSizeBase + exports.$fontSizeUnit;
