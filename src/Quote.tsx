import * as React from "react";
import styled from "styled-components";
const {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
} = require("styled-system");

const BlockQuote = styled.blockquote`
  display: inline-block;
  white-space: pre-line;
  position: relative;
  margin: 0 0 0 20px;

  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}

  &:before {
    content: "“";
    display: block;
    font: italic 400%/1 Cochin,Georgia,"Times New Roman", serif;
    font-size: 40px;
    height: 0;
    left: -20px;
    position: absolute;
    top: -10px;
    ${color}
    ${fontWeight}
  }

  &:after {
    content: "”";
    display: block;
    font: italic 400%/1 Cochin,Georgia,"Times New Roman", serif;
    font-size: 40px;
    height: 0;
    right: -20px;
    position: absolute;
    top: -10px;
    ${color}
    ${fontWeight}
  }
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
}

export class Quote extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "black.dark",
    bg: "transparent",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "regular",
    // lineHeight
    lineHeight: "1.44",
  };

  public render() {
    return (
      <BlockQuote {...this.props}>
        {this.props.children}
      </BlockQuote>
    );
  }
}
