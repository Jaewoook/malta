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
  justifySelf,
  JustifySelfProps,
  alignSelf,
  AlignSelfProps,
  order,
  OrderProps,
  border,
  BorderProps
} from "styled-system";

type Props = SpaceProps & WidthProps & HeightProps & ColorProps & JustifySelfProps & AlignSelfProps & OrderProps & BorderProps;

export const Box = styled.div<Props>`
  box-sizing: border-box;
  ${space}
  ${width}
  ${height}
  ${color}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${border}
`;

