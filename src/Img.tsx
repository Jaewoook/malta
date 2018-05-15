import * as React from "react";
import styled from "styled-components";
const {
  height,
  space,
  width,
} = require("styled-system");

const StyledImg = styled.img`
  ${height}
  ${space}
  ${width}
`;

export interface IProps {
  src: string;
  // height
  height: number | string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  // width
  width: number | string;
}

export class Img extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    src: "",
    // height
    height: "60px",
    // space
    m: 0,
    // width
    width: 1,
  };

  public render() {
    return (
      <StyledImg
        {...this.props}
      />
    );
  }
}
