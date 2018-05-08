import * as React from "react";
import styled from "styled-components";
const { theme } = require("styled-system");

const Wrapper = styled.div`
  align-items: center;
  background-color: ${theme("colors.white")};
  display: flex;
  height: 70px;
  left: 0;
  padding-left: 40px;
  padding-right: 40px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Logo = styled.img`
  height: 34px;
  width: 125px;
`;

const Right = styled.div`
  flex: 1;
  text-align: right;
`;

const Title = styled.div`
  font-size: ${theme("fontSizes.h5")}px;
  font-weight: ${theme("fontWeights.regular")};
  color: ${theme("colors.black.dark")};
`;

const Description = styled.div`
  font-size: ${theme("fontSizes.h5")}px;
  font-weight: ${theme("fontWeights.demiLight")};
  color: ${theme("colors.black.standard")};
  margin-top: 4px;
`;

export interface IProps {
  title?: string;
  description?: string;
}

export class Navbar extends React.Component<IProps, any> {
  public render() {
    const { title, description } = this.props;
    return (
      <Wrapper>
        <Logo src={require("./images/img-gnb-logo.png")}/>
        <Right>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Right>
      </Wrapper>
    );
  }
}
