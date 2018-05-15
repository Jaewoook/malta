import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Jumbotron } from "../src";

storiesOf("Components/Jumbotron", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Jumbotron>
            <p>이것은 기본 점보트론입니다.</p>
          </Jumbotron>
        </App>
      );
    })
  )
  .add("with background color",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Jumbotron bg="red">
            <p>이것은 배경색을 빨간색을 바꾼 점보트론입니다.</p>
          </Jumbotron>
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
          <Jumbotron m={3} p={4}>
            <p>이것은 마진이 3단계, 패딩이 4단계인 점보트론입니다.</p>
          </Jumbotron>
        </App>
      );
    })
  );
