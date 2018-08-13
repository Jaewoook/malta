import * as React from "react";
import styled from "styled-components";

const fit = (props: any) => `object-fit: ${props.fit};`;
const position = (props: any) => `object-position: ${props.position};`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  ${fit}
  ${position}
`;

Image.defaultProps = {
  alt: "img"
};
