import * as React from "react";
import { Box } from "grid-styled";

export const Container = (props: any) => (
  <Box
    {...props}
    mx="auto"
    style={{ minHeight: "100%", maxWidth: "1190px" }}
  />
);
