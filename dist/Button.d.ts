/// <reference types="react" />
import * as React from "react";
export interface IProps {
    prefixCls?: string;
    className?: string;
    btnType?: string;
    width?: string;
    type?: string;
    disabled?: boolean;
    onClick?: any;
}
export declare class Button extends React.Component<IProps, any> {
    constructor(props: IProps);
    render(): JSX.Element;
}
