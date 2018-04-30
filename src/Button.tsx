import * as React from "react";
import * as classNames from "classnames";
import styled from "styled-components";
import {
  $white,
  $primary,
  $secondary
} from "./_variables/colors";
import {
  $fontSizeMd,
  $fontWeightBold
} from "./_variables/fonts";

export interface IProps {
  prefixCls?: string;
  className?: string;
  btnType?: string;
  width?: string;
  type?: string;
  disabled?: boolean;
  onClick?: any;
}

const StyledButton = styled.button`
  font-size: ${$fontSizeMd};
  font-weight: ${$fontWeightBold};
  padding: 1rem;
  cursor: pointer;
  width: ${(props: IProps) => props.width || "100%" };
  color: ${(props: IProps) => props.btnType === "primary" ? $white : $primary};
  background: ${(props: IProps) => props.btnType === "primary" ? $primary : "transparent"};
  &:hover {
    background: ${(props: IProps) => props.btnType === "primary" ? $secondary : "transparent"};
    color: ${(props: IProps) => props.btnType === "primary" ? $white : $secondary};
  }
`;

export class Button extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const {
      prefixCls = "sb-button",
      className,
      children, ...props
    } = this.props;

    const classString = classNames(prefixCls, className);

    return (
      <StyledButton className={classString} {...props}>{children}</StyledButton>
    );
  }
}
