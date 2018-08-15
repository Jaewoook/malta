import * as React from "react";
import styled from "styled-components";
import { width, WidthProps, height, HeightProps } from "styled-system";

const fit = (props: any) => `object-fit: ${props.fit};`;
const position = (props: any) => `object-position: ${props.position};`;

interface ImgProps {
  fit?: string;
  position?: string;
  alt?: string;
}

type Props = WidthProps & HeightProps & ImgProps;

export const Image = styled.img<Props>`
  ${width}
  ${height}
  ${fit}
  ${position}
`;

Image.defaultProps = {
  width: "100%",
  height: "100%",
  alt: "img",
  fit: "cover",
  position: "50% 50%"
};
