/// <reference types="react" />
import * as React from "react";
export interface IProps {
    onClick?: React.MouseEventHandler<HTMLElement>;
    borderColor?: string;
    borderRadius?: number | string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    color?: string;
    bg?: string;
    fontSize?: number | string;
    height?: number | string;
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
    width?: number | string;
}
export declare class Button extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
