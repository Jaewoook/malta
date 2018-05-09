import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Column, Row } from "../src";

storiesOf("Components/Grid (Row, Column)", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <div>
          <Row>
            <Column style={{ backgroundColor: "red" }}>Row 1 / Column 1</Column>
            <Column style={{ backgroundColor: "blue" }}>Row 1 / Column 2</Column>
            <Column style={{ backgroundColor: "yellow" }}>Row 1 / Column 3</Column>
          </Row>
          <Row>
            <Column style={{ backgroundColor: "orange" }}>Row 2 / Column 1</Column>
            <Column style={{ backgroundColor: "green" }}>Row 2 / Column 2</Column>
            <Column style={{ backgroundColor: "gray" }}>Row 2 / Column 3</Column>
          </Row>
        </div>
      );
    })
  );
