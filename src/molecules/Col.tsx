import * as React from "react";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";

export const Col = Flex.extend`
  flex-direction: column;
  align-items: center;
  juetify-contents: center;
`;