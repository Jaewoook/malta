import * as React from "react";
import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../theme";
const {
  border,
  borderColor,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  width,
} = require("styled-system");

const StyledTab = styled.li`
  ${border}
  ${borderColor}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${width}
  position: relative;
  display: inline-block;
  border-radius: 2px;
  cursor: pointer;
  margin-left: -1px;

  &:first-child {
    margin-left: 0;
  }

  ${(props: IProps) => props.selected && `
    background-color: ${colors.white};
    border-top: solid 2px ${colors.blue.royal};
    border-bottom: none;
    color: ${colors.blue.deep};
    font-weight: ${fontWeights.regular}
  `}
`;

export interface IProps {
  // border
  border?: string;
  borderColor?: string;
  // color
  color?: string;
  bg?: string;
  // fontSize
  fontSize?: number | string;
  // fontWeight
  fontWeight?: number | string;
  // lineHeight
  lineHeight?: number | string;
  // placement
  placement?: string;
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
  // textAlign
  align?: string;
  // width
  width?: number | string;
  // text
  text?: string;

  // event
  onClick?: React.MouseEventHandler<HTMLElement>;

  // options
  disabled?: boolean;
  selected?: boolean;
}

export class Tab extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // border
    border: "solid 1px",
    borderColor: "black._20",
    // color
    color: "black.dark",
    bg: "black._3",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "demiLight",
    // lineHeight
    lineHeight: "1.11",
    // space
    m: 0,
    px: 0,
    py: 2,
    // textAlign
    align: "center",
    // width
    width: 0.5,
  };

  public render() {
    const { disabled, onClick } = this.props;
    return (
      <StyledTab {...this.props} onClick={onClick}>
        {this.props.children}
      </StyledTab>
    );
  }
}
