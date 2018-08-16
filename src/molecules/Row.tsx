import * as React from "react";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";

export const Row = Flex.extend`
  flex-direction: row;
  align-items: center;
  juetify-contents: center;
`;