import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Button } from "../src";

storiesOf("Components/Button", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Button>
            이것은 버튼입니다.
          </Button>
        </App>
      );
    })
  )
  .add("with borderRadius",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Button borderRadius={2}>
            이것은 버튼입니다.
          </Button>
        </App>
      );
    })
  )
  .add("with color",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Button color="black.dark">
            이것은 버튼입니다.
          </Button>
        </App>
      );
    })
  )
  .add("with bg",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Button bg="red">
            이것은 버튼입니다.
          </Button>
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
          <Button fontSize="12px">
            이것은 버튼입니다.
          </Button>
        </App>
      );
    })
  )
  .add("with height",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Button height="40px">
            이것은 버튼입니다.
          </Button>
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
          <Button mt={3} mb="30px">
            이것은 버튼입니다.
          </Button>
        </App>
      );
    })
  )
  .add("with width",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Button width="300px">
            이것은 버튼입니다.
          </Button>
        </App>
      );
    })
  );
