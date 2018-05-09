import * as React from "react";
import styled from "styled-components";
const {
  borderRadius,
  color,
  fontSize,
  height,
  space,
  width,
} = require("styled-system");

const StyledButton = styled.button`
  cursor: pointer;
  ${borderRadius}
  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${height}
`;

export interface IProps {
  // borderRadius
  borderRadius?: number | string;
  // color
  color?: string;
  bg?: string;
  // fontSize
  fontSize?: number | string;
  // height
  height?: number | string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  // width
  width?: number | string;
}

export class Button extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // borderRadius
    borderRadius: "30px",
    // color
    color: "white",
    bg: "blue.royal",
    // fontSize
    fontSize: "h3",
    // height
    height: "60px",
    // space
    m: 0,
    mb: 2,
    // width
    width: 1,
  };

  public render() {
    return (
      <StyledButton
        {...this.props}
      />
    );
  }
}
