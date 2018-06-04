/// <reference types="react" />
import * as React from "react";
export interface IItem {
    title: string;
    link?: any;
    completed?: boolean;
    callback?: any;
}
export interface IProps {
    items: IItem[];
    current?: number;
}
export declare class Step extends React.Component<IProps, any> {
    static defaultProps: IProps;
    private renderStep(items, current);
    render(): JSX.Element;
}
