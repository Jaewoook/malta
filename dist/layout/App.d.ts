/// <reference types="react" />
import * as React from "react";
export interface IProps {
    prefixCls?: string;
    className?: string;
}
declare class App extends React.Component<IProps, any> {
    constructor(props: IProps);
    render(): JSX.Element;
}
export default App;
