import * as React from "react";
import { Box } from "grid-styled";
import { containerWidth } from "./theme";

export const Container = (props: any) => (
  <Box
    {...props}
    mx="auto"
    style={{ maxWidth: props.maxWidth || containerWidth }}
  />
);
