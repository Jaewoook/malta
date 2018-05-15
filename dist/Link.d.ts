/// <reference types="react" />
import * as React from "react";
export interface IProps {
    href: string;
    color?: string;
    bg?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
    m?: number | string;
    mt?: number | string;
    mr?: number | string;
    mb?: number | string;
    ml?: number | string;
    p?: number | string;
    pt?: number | string;
    pr?: number | string;
    pb?: number | string;
    pl?: number | string;
}
export declare class Link extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
