import * as React from "react";
import styled from "styled-components";
const { theme } = require("styled-system");

const Wrapper = styled.div`
  align-items: center;
  background-color: ${theme("colors.black.dark")};
  display: flex;
  height: 50px;
  padding-left: 40px;
`;

const Copyright = styled.div`
  color: ${theme("colors.white")};
  font-size: ${theme("fontSizes.h5")}px;
  font-weight: ${theme("fontWeights.demiLight")};
`;

export class Footer extends React.Component<any, any> {
  public render() {
    return (
      <Wrapper>
        <Copyright>Copyright © 2018 Salesboost. Inc</Copyright>
      </Wrapper>
    );
  }
}
