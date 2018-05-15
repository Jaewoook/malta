import * as React from "react";
import styled from "styled-components";
const { theme } = require("styled-system");
import { colors, containerWidth, fontSizes, fontWeights, footerHeight } from "./theme";

const Wrapper = styled.div`
  background-color: ${colors.black.dark};
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: ${footerHeight};
  padding-left: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${containerWidth};
`;

const Copyright = styled.div`
  color: ${colors.white};
  font-size: ${fontSizes.h5}px;
  font-weight: ${fontWeights.demiLight};
`;

export class Footer extends React.Component<any, any> {
  public render() {
    return (
      <Wrapper>
        <Container>
          <Copyright>Copyright © 2018 Salesboost. Inc</Copyright>
        </Container>
      </Wrapper>
    );
  }
}
