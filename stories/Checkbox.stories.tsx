import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Checkbox } from "../src";

storiesOf("Components/Checkbox", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Checkbox>
            이것은 체크박스입니다.
          </Checkbox>
        </App>
      );
    })
  )
  .add("with default checked",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Checkbox checked>
            이것은 체크박스입니다.
          </Checkbox>
        </App>
      );
    })
  )
  .add("with fontSize",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Checkbox fontSize="h2">
            이것은 체크박스입니다.
          </Checkbox>
        </App>
      );
    })
  )
  .add("with fontWeight",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Checkbox fontWeight="bold">
            이것은 체크박스입니다.
          </Checkbox>
        </App>
      );
    })
  )
  .add("with name",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Checkbox name="checkbox">
            이것은 체크박스입니다.
          </Checkbox>
        </App>
      );
    })
  )
  .add("with space (margin, padding)",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Checkbox m={1} p={1}>
            이것은 체크박스입니다.
          </Checkbox>
        </App>
      );
    })
  );
