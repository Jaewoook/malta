import * as React from "react";
import { storiesOf } from "@storybook/react";
import { App } from "../src/App";
import { Container } from "../src/Container";

storiesOf("Components/Container", module)
  .add("default", () => {
    return (
      <App>
        <Container bg="black.hint">
          Container는 max-width가 1190px이고 가운데 정렬이 되는 Box입니다.
        </Container>
      </App>
    );
  });
