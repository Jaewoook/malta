import * as React from "react";
import styled from "styled-components";
import {
  alignSelf,
  AlignSelfProps,
  height,
  HeightProps,
  justifySelf,
  JustifySelfProps,
  ResponsiveValue,
  space,
  SpaceProps,
  TLengthStyledSystem,
  width,
  WidthProps,
} from "styled-system";

const StyledSplit = styled.div<{ bg?: string; } & WidthProps & HeightProps & SpaceProps & AlignSelfProps & JustifySelfProps>`
  ${width}
  ${height}
  ${space}
  ${alignSelf}
  ${justifySelf}
  background-color: ${({ bg }) => bg || "rgba(22, 27, 72, 0.2)"};
`;

interface Props {
  horizontal?: boolean;
  vertical?: boolean;
  length?: ResponsiveValue<TLengthStyledSystem>;
  bg?: string;
  style?: any;
}

export type SplitProps = Props & AlignSelfProps & JustifySelfProps & SpaceProps;

export const Split: React.FC<SplitProps> = (props) => {
  const { horizontal, length, vertical, ...styles } = props;
  return <StyledSplit width={horizontal ? length : "1px"} height={vertical ? length : "1px"} {...styles} />;
};

Split.defaultProps = {
  horizontal: false,
  vertical: false,
  length: "100%",
  alignSelf: "center",
  bg: "rgba(22,27,72,0.2)",
};
