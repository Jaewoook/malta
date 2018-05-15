import * as React from "react";
import styled from "styled-components";
const {
  borderColor,
  borderRadius,
  borders,
  color,
  fontSize,
  height,
  space,
  width,
} = require("styled-system");

const StyledButton = styled.button`
  cursor: pointer;
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${height}
`;

export interface IProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  // borderColor
  borderColor?: string;
  // borderRadius
  borderRadius?: number | string;
  // borders
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
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
    onClick: () => {},
    // borderColor
    borderColor: "transparent",
    // borderRadius
    borderRadius: "30px",
    // borders
    border: "none",
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
