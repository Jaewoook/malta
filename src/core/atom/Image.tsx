import * as React from "react";
import styled from "styled-components";
import {
  width,
  WidthProps,
  height,
  HeightProps,
  flex,
  FlexProps,
  maxWidth,
  MaxWidthProps,
  maxHeight,
  MaxHeightProps,
} from "styled-system";

const objectFit = (props: any) => `object-fit: ${props.fit};`;
const objectPosition = (props: any) => `object-position: ${props.position};`;

interface ImgProps {
  objectFit?: string;
  objectPosition?: string;
  alt?: string;
}

type Props = WidthProps & HeightProps & ImgProps & FlexProps & MaxWidthProps & MaxHeightProps;

export const Image = styled.img<Props>`
  flex-shrink: 0;
  overflow: hidden;
  ${width}
  ${height}
  ${objectFit}
  ${objectPosition}
  ${flex}
  ${maxWidth}
  ${maxHeight}
`;

Image.defaultProps = {
  width: "100%",
  height: "100%",
  alt: "img",
  objectFit: "cover",
  objectPosition: "50% 50%"
};
