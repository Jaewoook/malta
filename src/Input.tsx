import * as React from "react";
import styled from "styled-components";
const { space } = require("styled-system");
import { colors, fontSizes, fontWeights, space as spaces } from "./theme";

const Wrapper = styled.div`
  width: 100%;
  ${space}
`;

const Label = styled.label`
  color: ${colors.black.dark};
  display: inline-block;
  font-size: ${fontSizes.h4}px;
  font-weight: ${fontWeights.demiLight};
  margin-bottom: ${spaces[2]}px;
`;

const ErrorLabel = Label.extend`
  color: ${colors.red};
  margin-top: ${spaces[1]};
`;

interface IStyledInputProps {
  error: boolean;
}

const StyledInput = styled.input`
  background-color: ${colors.white};
  border: solid 1px ${(props: IStyledInputProps) => props.error ? "#f51a1a" : colors.black._20};
  border-radius: 2px;
  box-shadow: 0 2px 6px 2px ${colors.black._3};
  box-sizing: border-box;
  color: ${colors.black.dark};
  font-size: ${fontSizes.h3}px;
  font-weight: ${fontWeights.demiLight};
  height: 60px;
  padding: 0 ${spaces[2]}px;
  width: 100%;

  &:disabled {
    background-color: ${colors.black._5};
  }

  &:focus {
    border: solid 1px ${(props: IStyledInputProps) => props.error ? colors.red : colors.blue.royal}
    outline: none;
  }
`;

export interface IProps {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  // input component
  disabled?: boolean;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onDragStart?: React.DragEventHandler<HTMLInputElement>;
  onDrop?: React.DragEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  value?: string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  mx?: number | string;
  my?: number | string;
}

export class Input extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    // space
    m: 0,
  };

  private renderLabel(label: string) {
    if (label) {
      return <Label>{label}</Label>;
    }
    return null;
  }

  private renderErrorLabel(error: boolean, errorMessage: string) {
    if (error && errorMessage) {
      return <ErrorLabel>{errorMessage}</ErrorLabel>;
    }
    return null;
  }

  public render() {
    const {
      label,
      error,
      errorMessage,
      // input
      disabled,
      name,
      onBlur,
      onChange,
      onDragStart,
      onDrop,
      onFocus,
      placeholder,
      type,
      value,
      ...props } = this.props;
    return (
      <Wrapper {...props}>
        {this.renderLabel(label)}
        <StyledInput
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onFocus={onFocus}
          placeholder={placeholder}
          type={type}
          value={value}
          error={error} />
        {this.renderErrorLabel(error, errorMessage)}
      </Wrapper>
    );
  }
}
