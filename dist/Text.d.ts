/// <reference types="react" />
import * as React from "react";
export interface IProps {
    color?: string;
    bg?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
    lineHeight?: number | string;
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
    align?: string;
    width?: number | string;
}
export declare class Text extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
