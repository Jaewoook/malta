import * as React from "react";
import { storiesOf } from "@storybook/react";
import { App } from "../src/App";
import { Navbar } from "../src/Navbar";

storiesOf("Navbar", module)
  .add("default", () => <App><Navbar /></App>)
  .add("with only title", () => {
    return <App><Navbar title="이것은 제목입니다." /></App>;
  })
  .add("with title and description", () => {
    return <App><Navbar title="이것은 제목입니다." description="이것은 설명입니다." /></App>;
  });
