/// <reference types="react" />
import * as React from "react";
export declare type Breakpoint = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
export declare type BreakpointMap = {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
};
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: number | BreakpointMap;
    type?: "flex";
    align?: "top" | "middle" | "bottom";
    justify?: "start" | "end" | "center" | "space-around" | "space-between";
    prefixCls?: string;
}
export interface RowState {
    screens: BreakpointMap;
}
export declare class Row extends React.Component<RowProps, RowState> {
    static defaultProps: {
        gutter: number;
    };
    state: RowState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getGutter(): string | number | BreakpointMap;
    render(): JSX.Element;
}
