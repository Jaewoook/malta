import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Step } from "../src";

const items_3_step = [
  { title: "페이스북 정보 입력" },
  { title: "Cafe24 계정 입력" },
  { title: "연락처 입력" }
];

const items_4_step = [
  { title: "페이스북 정보 입력", link: "#1" },
  { title: "카카오 픽셀 ID 입력", link: "#2" },
  { title: "Cafe24 계정 입력", link: "#3" },
  { title: "연락처 입력", link: "#4" }
];

const items_5_step = [
  { title: "페이스북 정보 입력", link: "#1" },
  { title: "구글 픽셀 ID 입력", link: "#2" },
  { title: "카카오 픽셀 ID 입력", link: "#3" },
  { title: "Cafe24 계정 입력", link: "#4" },
  { title: "연락처 입력", link: "#5" }
];

const items_with_completed = [
  { title: "페이스북 정보 입력", link: "#1", completed: true, callback: function () { console.log("click #1") } },
  { title: "카카오 픽셀 ID 입력", link: "#2", completed: true, callback: function () { console.log("click #2") } },
  { title: "Cafe24 계정 입력", link: "#3", completed: true, callback: function () { console.log("click #3") } },
  { title: "연락처 입력", link: "#4", completed: false, callback: function () { console.log("click #4") } }
];

storiesOf("Components/Step", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_3_step} />
        </App>
      );
    })
  )
  .add("with 4 Step",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_4_step} />
        </App>
      );
    })
  )
  .add("with 5 Step",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_5_step} />
        </App>
      );
    })
  )
  .add("with Completed",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step items={items_with_completed} />
        </App>
      );
    })
  )
  .add("with Current Step",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Step current={3} items={items_with_completed} />
        </App>
      );
    })
  );
