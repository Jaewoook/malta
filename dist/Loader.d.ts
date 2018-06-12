/// <reference types="react" />
import * as React from "react";
export interface IProps {
    color?: string;
    height?: number | string;
    width?: number | string;
    show: boolean;
}
export declare class Loader extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
