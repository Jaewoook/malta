import * as React from "react";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  height,
  HeightProps,
  color,
  ColorProps,
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
  minWidth,
  MinWidthProps,
  minHeight,
  MinHeightProps,
  flex,
  FlexProps,
  borders,
  BordersProps,
  borderRadius,
  BorderRadiusProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
} from "styled-system";
import {
  hover,
  HoverProps,
  ofReducer,
  OfReducerProps,
  transition,
  TransitionProps,
  cursor,
  CursorProps,
} from "../../utils";

type InputProps = SpaceProps & WidthProps & HeightProps & ColorProps
  & MaxWidthProps & MaxHeightProps & MinWidthProps & MinHeightProps
  & FlexProps & BordersProps & BorderRadiusProps
  & FontSizeProps & FontWeightProps & FontFamilyProps
  & HoverProps & OfReducerProps & TransitionProps & CursorProps;

export const Input = styled.input<InputProps>`
  appearance: none;
  outline: none;
  ${space}
  ${width}
  ${height}
  ${color}
  ${maxWidth}
  ${maxHeight}
  ${minWidth}
  ${minHeight}
  ${flex}
  ${borders}
  ${borderRadius}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${hover}
  ${ofReducer}
  ${transition}
  ${cursor}
`;

Input.defaultProps = {
  p: 0,
  m: 0,
  fontSize: "16px",
}
