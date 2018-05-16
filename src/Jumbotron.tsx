import * as React from "react";
import styled from "styled-components";
const {
  color,
  space,
} = require("styled-system");

const Div = styled.div`
  ${color}
  ${space}
`;

export interface IProps {
  // color
  bg?: string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  px?: number | string;
  py?: number | string;
}

export class Jumbotron extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    bg: "black._5",
    // space
    m: 0,
    p: 3,
  };

  public render() {
    return (
      <Div {...this.props}>
        {this.props.children}
      </Div>
    );
  }
}
