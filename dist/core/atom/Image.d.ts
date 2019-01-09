import { WidthProps, HeightProps, FlexProps, MaxWidthProps, MaxHeightProps } from "styled-system";
interface ImgProps {
    objectFit?: string;
    objectPosition?: string;
    alt?: string;
}
declare type Props = WidthProps & HeightProps & ImgProps & FlexProps & MaxWidthProps & MaxHeightProps;
export declare const Image: import("styled-components").StyledComponent<"img", any, Props, never>;
export {};
