import styled from "styled-components";
import { Box } from "./Box";
import {
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
} from "styled-system";

type FlexProps = AlignItemsProps & JustifyContentProps & FlexDirectionProps & FlexWrapProps;

export const Flex = styled(Box) <FlexProps>`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`;
