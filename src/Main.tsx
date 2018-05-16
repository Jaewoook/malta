import * as React from "react";
import { Box, Flex } from "grid-styled";
import { footerHeight, navBarHeight } from "./theme";

export const Main = (props: any) => {
  const { fullScreen, children, ...restProps } = props;
  if (props.fullScreen) {
    return (
      <Box
        {...restProps}
        mb={`-${footerHeight}`}
        pb={footerHeight}
        pt={navBarHeight}
        style={{ display: "flex", justifyContent: "center", minHeight: "100%" }}>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center">
          {children}
        </Flex>
      </Box>
    );
  }
  return (
    <Box
      {...props}
      mb={`-${footerHeight}`}
      pb={footerHeight}
      pt={navBarHeight}
      style={{ minHeight: "100%" }}
    />
  );
};
