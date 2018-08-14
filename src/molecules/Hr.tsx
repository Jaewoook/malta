import * as React from "react";
import styled from "styled-components";
import { colors } from "../commons/theme";
import { space, borderBottom, SpaceProps, width, WidthProps } from "styled-system";

const get = (from: object, selector: string) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t: any) => t !== "")
    .reduce((prev: any, cur: any): any => prev && prev[cur], from);

type LineStyle = "solid" | "dashed" | "dotted";
type LineColor = string;
type LineThick = number | string;

interface LineProps {
  lineStyle?: LineStyle;
  color?: LineColor;
  thick?: LineThick;
}

type Props = LineProps & SpaceProps & WidthProps;

const border = (props: Props) => `border-bottom: ${props.thick} ${props.lineStyle} ${get(colors, props.color) ? get(colors, props.color) : props.color}`;

export const Hr = styled.div<Props>`
  height: 0px;
  ${space}
  ${width}
  ${border}
`;

Hr.defaultProps = {
  thick: "1px",
  lineStyle: "solid",
  color: "black._20",
  my: 1
};
