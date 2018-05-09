import * as React from "react";
import styled from "styled-components";
const { theme } = require("styled-system");

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  color: ${theme("colors.black.dark")};
  display: inline-block;
  font-size: ${theme("fontSizes.h4")}px;
  font-weight: ${theme("fontWeights.demiLight")};
  margin-bottom: 16px;
`;

const ErrorLabel = Label.extend`
  color: #f51a1a;
  margin-top: 10px;
`;

interface IStyledInputProps {
  error: boolean;
}

const StyledInput = styled.input`
  background-color: #ffffff;
  border: solid 1px ${(props: IStyledInputProps) => props.error ? "#f51a1a" : "rgba(22, 27, 72, 0.2)"};
  border-radius: 2px;
  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.03);
  color: ${theme("colors.black.dark")};
  font-size: ${theme("fontSizes.h3")}px;
  font-weight: ${theme("fontWeights.demiLight")};
  height: 60px;
  padding: 0 20px;
  width: 100%;

  &:disabled {
    background-color: rgba(22, 27, 72, 0.05);
  }

  &:focus {
    border: solid 1px ${(props: IStyledInputProps) => props.error ? "#f51a1a" : "#454edf"}
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
