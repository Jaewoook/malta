/// <reference types="react" />
import * as React from "react";
export interface ColSize {
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
}
export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
    xs?: number | ColSize;
    sm?: number | ColSize;
    md?: number | ColSize;
    lg?: number | ColSize;
    xl?: number | ColSize;
    xxl?: number | ColSize;
    prefixCls?: string;
}
export declare class Col extends React.Component<ColProps, {}> {
    render(): JSX.Element;
}
