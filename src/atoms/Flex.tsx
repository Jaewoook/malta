import * as React from "react";
import styled from "styled-components";
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

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  box-sizing: border-box;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`;
