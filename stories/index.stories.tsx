import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const { Button, Welcome } = require("@storybook/react/demo");
import { App } from "../src";

storiesOf("Welcome", module).add("to Storybook", () => <Welcome/>);

storiesOf("Button", module)
  .add("with text", () => <Button onClick={action("clicked")}>Hello Button</Button>)
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("App", module)
  .add("to App", () => <App/>);
