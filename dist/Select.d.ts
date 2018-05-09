/// <reference types="react" />
import * as React from "react";
export interface IItem {
    id: string;
    label: string;
    value: string;
}
export interface IProps {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    items: IItem[];
}
export declare class Select extends React.Component<IProps, any> {
    private renderLabel();
    render(): JSX.Element;
}
