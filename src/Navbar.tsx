import * as React from "react";
import styled from "styled-components";
import {
  colors,
  containerWidth,
  fontSizes,
  fontWeights,
  navBarHeight,
  space
} from "./theme";


const Wrapper = styled.div`
  background-color: ${colors.white};
  height: ${navBarHeight};
  left: 0;
  position: fixed;
  right: 0;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: ${navBarHeight};
  margin-left: auto;
  margin-right: auto;
  max-width: ${containerWidth};
  padding-left: ${space[3]}px;
  padding-right: ${space[3]}px;
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
  margin-top: 4px;
`;

export interface IProps {
  logoUrl: string;
  title?: string;
  description?: string;
}

export class Navbar extends React.Component<IProps, any> {
  public render() {
    const { logoUrl, title, description } = this.props;
    return (
      <Wrapper>
        <Container>
          <Logo src={logoUrl}/>
          <Right>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Right>
        </Container>
      </Wrapper>
    );
  }
}
