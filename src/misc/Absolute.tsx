import * as React from "react";
import styled from "styled-components";
import {
  top,
  TopProps,
  bottom,
  BottomProps,
  left,
  LeftProps,
  right,
  RightProps,
  zIndex,
  ZIndexProps
} from "styled-system";

type Props = TopProps & BottomProps & LeftProps & RightProps & ZIndexProps;

export const Absolute = styled.div<Props>`
  position: absolute;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`;
