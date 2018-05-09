import * as React from "react";
import { Box } from "grid-styled";

export const Container = (props: any) => (
  <Box
    {...props}
    mx="auto"
    style={{ maxWidth: "1190px" }}
  />
);
