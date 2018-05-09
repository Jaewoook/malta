/// <reference types="react" />
import * as React from "react";
export interface IProps {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
}
export declare class Input extends React.Component<IProps, any> {
    private renderLabel();
    private renderErrorLabel();
    render(): JSX.Element;
}
