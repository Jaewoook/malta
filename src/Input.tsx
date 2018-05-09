import * as React from "react";
import styled from "styled-components";
import { colors, fontSizes, fontWeights, space } from "./theme";

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  color: ${colors.black.dark};
  display: inline-block;
  font-size: ${fontSizes.h4}px;
  font-weight: ${fontWeights.demiLight};
  margin-bottom: ${space[2]}px;
`;

const ErrorLabel = Label.extend`
  color: ${colors.red};
  margin-top: ${space[1]};
`;

interface IStyledInputProps {
  error: boolean;
}

const StyledInput = styled.input`
  background-color: ${colors.white};
  border: solid 1px ${(props: IStyledInputProps) => props.error ? "#f51a1a" : colors.black._20};
  border-radius: 2px;
  box-shadow: 0 2px 6px 2px ${colors.black._3};
  color: ${colors.black.dark};
  font-size: ${fontSizes.h3}px;
  font-weight: ${fontWeights.demiLight};
  height: 60px;
  padding: 0 ${space[2]}px;
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
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export class Input extends React.Component<IProps, any> {
  private renderLabel() {
    const { label } = this.props;
    if (label) {
      return <Label>{label}</Label>;
    }
    return null;
  }

  private renderErrorLabel() {
    const { error, errorMessage } = this.props;
    if (error && errorMessage) {
      return <ErrorLabel>{errorMessage}</ErrorLabel>;
    }
    return null;
  }

  public render() {
    const { placeholder, disabled, error } = this.props;
    return (
      <Wrapper>
        {this.renderLabel()}
        <StyledInput placeholder={placeholder} disabled={disabled} error={error} />
        {this.renderErrorLabel()}
      </Wrapper>
    );
  }
}
