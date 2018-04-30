import * as React from "react";
import classNames from "classnames";
import styled from "styled-components";
import {
  $primaryBackground
} from "../_variables/colors";

export interface IProps {
  prefixCls?: string;
  className?: string;
}

const Layout = styled.div`
  background: ${$primaryBackground};
  padding: 0;
  margin: 0;
  display: block;
`;

class App extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const {
      prefixCls = "",
      className,
      ...props
    } = this.props;

    const classString = classNames(prefixCls, className);

    return (
      <Layout className={classString} {...props}></Layout>
    );
  }
}

export default App;
