import * as React from "react";
import { Box } from "grid-styled";
import { footerHeight, navBarHeight } from "./theme";

export const Main = (props: any) => (
  <Box
    {...props}
    mb={`-${footerHeight}`}
    pb={footerHeight}
    pt={navBarHeight}
    style={{ minHeight: "100%" }}
  />
);
