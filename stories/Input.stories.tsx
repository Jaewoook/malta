import * as React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { App, Input } from "../src";

const Container = styled.div`
  width: 440px;
`;

storiesOf("Components/Input", module)
  .add("default", () => {
    return (
      <App>
        <Container>
          <Input />
        </Container>
      </App>
    );
  })
  .add("with label", () => {
    return (
      <App>
        <Container>
          <Input label="이것은 라벨입니다." />
        </Container>
      </App>
    );
  })
  .add("with label and placeholder", () => {
    return (
      <App>
        <Container>
          <Input label="이것은 라벨입니다." input={{ placeholder: "이것은 플레이스홀더입니다." }} />
        </Container>
      </App>
    );
  })
  .add("with disabled", () => {
    return (
      <App>
        <Container>
          <Input label="이것은 라벨입니다." input={{ placeholder: "이것은 플레이스홀더입니다.", disabled: true }} />
        </Container>
      </App>
    );
  })
  .add("with error", () => {
    return (
      <App>
        <Container>
          <Input label="이것은 라벨입니다." input={{ placeholder: "이것은 플레이스홀더입니다." }} error />
        </Container>
      </App>
    );
  })
  .add("with error message", () => {
    return (
      <App>
        <Container>
          <Input label="이것은 라벨입니다." input={{ placeholder: "이것은 플레이스홀더입니다." }} error errorMessage="이것은 에러 메시지입니다." />
        </Container>
      </App>
    );
  })
  .add("with margin", () => {
    return (
      <App>
        <Container>
          <Input label="이것은 라벨입니다." input={{ placeholder: "이것은 플레이스홀더입니다." }} m={4} />
        </Container>
      </App>
    );
  });
