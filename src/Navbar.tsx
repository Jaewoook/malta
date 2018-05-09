import * as React from "react";
import styled from "styled-components";
import { colors, fontSizes, fontWeights, space } from "./theme";

const Wrapper = styled.div`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  height: 70px;
  left: 0;
  padding-left: ${space[3]}px;
  padding-right: ${space[3]}px;
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
  color: ${colors.black.dark};
  font-size: ${fontSizes.h5}px;
  font-weight: ${fontWeights.regular};
`;

const Description = styled.div`
  font-size: ${fontSizes.h5}px;
  font-weight: ${fontWeights.demiLight};
  color: ${colors.black.standard};
  margin-top: ${space[1]}px;
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
