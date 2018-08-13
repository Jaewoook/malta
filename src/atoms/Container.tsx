import * as React from "react";
import styled from "styled-components";
import { maxWidth, MaxWidthProps } from "styled-system";

type Props = MaxWidthProps;

export const Container = styled.div<Props>`
  margin: 0px auto;
  max-width: 760px;
  ${maxWidth}
`;
