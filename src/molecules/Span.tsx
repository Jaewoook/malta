import * as React from "react";
import { Text } from "../atoms/Text";

export const Span = Text.extend`
  display: inline;
`.withComponent("span");
