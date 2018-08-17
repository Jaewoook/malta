import * as React from "react";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";

export const Col = Flex.extend`
`;

Col.defaultProps = {
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
};
