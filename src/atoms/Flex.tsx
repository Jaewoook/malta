import * as React from "react";
import {
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  flexWrap,
  FlexWrapProps,
  flexDirection,
  FlexDirectionProps
} from "styled-system";
import { Box } from "./Box";

type FlexProps = AlignItemsProps & JustifyContentProps & FlexWrapProps & FlexDirectionProps;

export const Flex = Box.extend<FlexProps>`
  display: flex;
  box-sizing: border-box;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`;