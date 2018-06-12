import * as React from "react";
import styled, { keyframes } from "styled-components";

const {
  color,
  height,
  width,
} = require("styled-system");

const animation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

const common = `
  border-radius: 50%;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: ${animation} 1.8s infinite ease-in-out;
  animation: ${animation} 1.8s infinite ease-in-out;
`;

const beforeAndAfter = `
  content: "";
  position: absolute;
  top: 0;
  width: inherit;
  height: inherit;
`;

const StyledLoader = styled.div`
  ${common}
  ${color}
  ${height}
  ${width}
  display : ${(props: IProps) => props.show ? "inherit" : "none"};

  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &:before {
    ${common}
    ${beforeAndAfter}
    left: -3em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    ${common}
    ${beforeAndAfter}
    left: 3em;
  }
`;

export interface IProps {
  // color
  color?: string;
  // height
  height?: number | string;
  // width
  width?: number | string;
  show: boolean;
}

export class Loader extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // color
    color: "black.hint",
    // height
    height: "1.5em",
    // width
    width: "1.5em",
    show: false
  };
  public render() {
    const { show } = this.props;
    return (
      <StyledLoader show={show} {...this.props}>
      </StyledLoader>
    );
  }
}
