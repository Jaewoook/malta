
import * as React from "react";
import { create } from "react-test-renderer";
import { Button } from "../src/Button";

test("Say my name, say my name...", () => {
    const tree1 = create(
        <Button>Hello World!</Button>
    ).toJSON();
    expect(tree1).toMatchSnapshot();
});
