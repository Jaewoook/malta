import * as React from "react";
import { Flex } from "grid-styled";

export class Row extends React.Component<any, any> {
  public render() {
    return (
      <Flex
        {...this.props}
        mx={-3}
      />
    );
  }
}
