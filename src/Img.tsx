import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "./theme";
import { hiddenDown, hiddenUp } from "./tools/responsiveHide";

const {
  height,
  space,
  width,
} = require("styled-system");

const StyledImg = styled.img`
  ${height}
  ${space}
  ${width}

  ${(props: IProps) => props.hiddendown && hiddenDown(props.hiddendown)};
  ${(props: IProps) => props.hiddenup && hiddenUp(props.hiddenup)};
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
  mx?: number | string;
  my?: number | string;
  // width
  width: number | string;
  // etc
  hiddendown?: string;
  hiddenup?: string;
}

export class Img extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    src: "",
    // height
    height: "auto",
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
