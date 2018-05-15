import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Img } from "../src";

storiesOf("Components/Img", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" />
        </App>
      );
    })
  )
  .add("with margin",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Img src={require("./images/img-gnb-logo.png")} width="125px" height="34px" m={3} />
        </App>
      );
    })
  );
