import * as React from "react";
import { Box } from "grid-styled";

export class Column extends React.Component<any, any> {
  public render() {
    return (
      <Box
        {...this.props}
        px={3}
        flex="1 1 auto"
      />
    );
  }
}
