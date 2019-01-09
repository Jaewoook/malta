import * as React from "react";
import { ColorProps } from "styled-system";
import { HoverProps, CursorProps } from "../../utils";
interface Props {
    name: string;
    theme?: any;
    size: number;
}
export declare const Icon: React.SFC<Props & HoverProps & ColorProps & CursorProps>;
export {};
