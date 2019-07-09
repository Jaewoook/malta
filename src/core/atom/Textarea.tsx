import styled from "styled-components";
import {
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  height,
  HeightProps,
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
  minWidth,
  MinWidthProps,
  minHeight,
  MinHeightProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";

export type TextAreaProps = ColorProps & FlexProps & HeightProps & WidthProps & SpaceProps & BoxShadowProps
  & BorderProps & BorderRadiusProps & FontFamilyProps & FontSizeProps & FontWeightProps
  & MaxWidthProps & MaxHeightProps & MinWidthProps & MinHeightProps;

export const Textarea = styled.textarea<TextAreaProps>`
  ${border}
  ${borderRadius}
  ${boxShadow}
  ${color}
  ${flex}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${space}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
`;

Textarea.defaultProps = {
  p: 0,
  m: 0,
  fontSize: "16px",
  border: "none",
};
