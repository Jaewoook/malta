/// <reference types="react" />
import * as React from "react";
export interface IProps {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    m?: number | string;
    mt?: number | string;
    mr?: number | string;
    mb?: number | string;
    ml?: number | string;
    mx?: number | string;
    my?: number | string;
}
export declare class Input extends React.Component<IProps, any> {
    static defaultProps: IProps;
    private renderLabel(label);
    private renderErrorLabel(error, errorMessage);
    render(): JSX.Element;
}
