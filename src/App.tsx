import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
