import * as React from "react";
import Link from "next/link";
import {
  Text
} from "../../dist/core";

class Release extends React.Component<any, any> {

  render() {
    return (
      <>
        <Link href="/">
          <Text color="blue.royal" cursor="pointer" hover={{ color: "red" }}>Back</Text>
        </Link>
        <div>release page</div>
      </>
    );
  }
}

export default Release;
