import * as React from "react";
import styled from "styled-components";
const {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  width,
} = require("styled-system");

const StyledText = styled.div`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${width}
`;

export interface IProps {
  // color
  color?: string;
  bg?: string;
  // fontSize
  fontSize?: number | string;
  // fontWeight
  fontWeight?: number | string;
  // lineHeight
  lineHeight?: number | string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  // textAlign
  align?: string;
  // width
  width?: number | string;
}

export class Text extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    color: "black.dark",
    bg: "transparent",
    fontSize: "h3",
    fontWeight: "regular",
    lineHeight: "1.44",
    m: 0,
    p: 0,
    align: "left",
    width: 1,
  };

  public render() {
    return (
      <StyledText {...this.props}>
        {this.props.children}
      </StyledText>
    );
  }
}
