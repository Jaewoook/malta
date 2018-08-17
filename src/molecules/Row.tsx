import * as React from "react";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";

export const Row = Flex.extend`
`;

Row.defaultProps = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};
