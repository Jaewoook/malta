import * as React from "react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { App, Link } from "../src";

storiesOf("Components/Link", module)
  .add("default", () => {
    return (
      <App>
        <Link href="#">이것은 기본 링크입니다.</Link>
      </App>
    );
  })
  .add("with color",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <App>
          <Link href="#" color="blue.deep">이것은 딥 블루 링크입니다.</Link>
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
          <Link href="#" fontSize="h1">이것은 h1 크기의 링크입니다.</Link>
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
          <Link href="#" fontWeight="medium">이것은 fontWeight이 medium인 링크입니다.</Link>
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
          <Link href="#" m={1}>이것은 margin(m)이 1단계인 링크입니다. m은 0~5단계까지 가능합니다.</Link>
        </App>
      );
    })
  );
