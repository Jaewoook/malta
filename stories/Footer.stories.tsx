import * as React from "react";
import { storiesOf } from "@storybook/react";
import { App } from "../src/App";
import { Footer } from "../src/Footer";

storiesOf("Components/Footer", module)
  .add("default", () => <App><Footer /></App>);
