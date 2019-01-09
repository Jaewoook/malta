import { ThemedCssFunction } from "styled-components";
export declare const hover: any;
export interface HoverProps {
    hover?: any;
}
export declare const transition: any;
export interface TransitionProps {
    transition?: any;
}
export declare const styleReducer: ThemedCssFunction<any>;
export declare const ofReducer: any;
export interface OfReducerProps {
    of?: any;
}
export declare const cursor: (props: any) => {
    cursor: any;
};
export interface CursorProps {
    cursor?: "pointer" | "default" | "progress" | "not-allowed";
}
export declare const getValueFromTheme: (theme: object, value: string) => any;
