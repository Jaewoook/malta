import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Flex } from "../src/Flex";
import { Box } from "../src/Box";

storiesOf("Components/Grid (Flex, Box)", module)
  .add("default",
    withInfo({
      header: false,
      inline: true,
      propTables: false,
    })(() => {
      return (
        <Flex>
          <Box width={1 / 2} px={2} style={{ backgroundColor: "red" }}>
            Half width
          </Box>
          <Box width={1 / 2} px={2} style={{ backgroundColor: "blue" }}>
            Half width
          </Box>
        </Flex>
      );
    })
  );
