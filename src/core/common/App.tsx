import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const App = (props: any) => {
  return (
    <ThemeProvider theme={props.theme}>
      <Wrapper>
        {props.children}
      </Wrapper>
    </ThemeProvider>
  );
};
