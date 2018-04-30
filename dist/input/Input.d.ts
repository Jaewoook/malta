/// <reference types="react" />
import * as React from "react";
export interface IProps {
    btnType?: string;
    type?: string;
    noUseError?: boolean;
    input?: any;
    disabled?: boolean;
    meta?: {
        touched?: boolean;
        error?: string;
    };
}
declare class Input extends React.Component<IProps, any> {
    constructor(props: IProps);
    private renderError(touched, error);
    render(): JSX.Element;
}
export default Input;
