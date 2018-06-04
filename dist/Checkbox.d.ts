/// <reference types="react" />
import * as React from "react";
export interface IProps {
    name?: string;
    checked?: boolean;
    color?: string;
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
}
export declare class Checkbox extends React.Component<IProps, any> {
    constructor(props: any);
    private handleInputChange(event);
    private renderCheckLinePoints();
    static defaultProps: IProps;
    render(): JSX.Element;
}
