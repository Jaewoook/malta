import * as React from "react";
import { storiesOf } from "@storybook/react";
import { App, Footer } from "../src";

storiesOf("Components/Footer", module)
  .add("default", () => <App><Footer /></App>);
