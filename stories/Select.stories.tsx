import * as React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { App, Select } from "../src";

const Container = styled.div`
  width: 440px;
`;

const items = [
  { id: "1", label: "1번 아이템", value: "1" },
  { id: "2", label: "2번 아이템", value: "2" },
];

const manyItems = [
  { id: "1", label: "1번 아이템", value: "1" },
  { id: "2", label: "2번 아이템", value: "2" },
  { id: "3", label: "3번 아이템", value: "3" },
  { id: "4", label: "4번 아이템", value: "4" },
  { id: "5", label: "5번 아이템", value: "5" },
  { id: "6", label: "6번 아이템", value: "6" },
];

storiesOf("Components/Select", module)
  .add("default", () => {
    return (
      <App>
        <Container>
          <Select items={items} />
        </Container>
      </App>
    );
  })
  .add("with label", () => {
    return (
      <App>
        <Container>
          <Select label="이것은 라벨입니다." items={items} />
        </Container>
      </App>
    );
  })
  .add("with label and placeholder", () => {
    return (
      <App>
        <Container>
          <Select label="이것은 라벨입니다." placeholder="이것은 플레이스홀더입니다." items={items} />
        </Container>
      </App>
    );
  })
  .add("with disabled", () => {
    return (
      <App>
        <Container>
          <Select label="이것은 라벨입니다." placeholder="이것은 플레이스홀더입니다." disabled items={items} />
        </Container>
      </App>
    );
  })
  .add("with many items", () => {
    return (
      <App>
        <Container>
          <Select label="이것은 라벨입니다." placeholder="이것은 플레이스홀더입니다." items={manyItems} />
        </Container>
      </App>
    );
  });
