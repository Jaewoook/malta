import * as React from "react";
import { Box } from "grid-styled";
import { containerWidth, footerHeight, navBarHeight } from "./theme";

export const Container = (props: any) => (
  <Box
    {...props}
    mx="auto"
    mb={`-${footerHeight}`}
    pb={footerHeight}
    pt={navBarHeight}
    style={{ minHeight: "100%", maxWidth: containerWidth }}
  />
);
