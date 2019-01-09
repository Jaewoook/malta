import { SpaceProps, WidthProps, HeightProps, ColorProps, MaxWidthProps, MaxHeightProps, MinWidthProps, MinHeightProps, FlexProps, BordersProps, BorderRadiusProps, FontFamilyProps, FontSizeProps, FontWeightProps } from "styled-system";
import { HoverProps, OfReducerProps, TransitionProps } from "../../utils";
declare type InputProps = SpaceProps & WidthProps & HeightProps & ColorProps & MaxWidthProps & MaxHeightProps & MinWidthProps & MinHeightProps & FlexProps & BordersProps & BorderRadiusProps & FontSizeProps & FontWeightProps & FontFamilyProps & HoverProps & OfReducerProps & TransitionProps;
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export {};
