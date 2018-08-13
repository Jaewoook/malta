import * as React from "react";
import { Box } from "../atoms/Box";
import { shadow } from "../commons/theme";

const boxShadow = (props: any): string => `box-shadow: ${shadow[props.shadow]};`;

export const Shadow = Box.extend`
  width: fit-content;
  height: auto;
  overflow-hidden;
  ${boxShadow}
`;
