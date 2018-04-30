import * as React from "react";

import styled from "styled-components";

export interface IProps {
  btnType?: string;
  type?: string;
  noUseError?: boolean;
  // props for redux-form
  input?: any;
  disabled?: boolean;
  meta?: {
    touched?: boolean;
    error?: string;
  };
}

interface IStyledInput {
  error?: string;
}

const Wrapper = styled.div`
  margin: 0.5rem 0;
`;
const ErrorWrapper = styled.div`
  height:1.5rem;
  display:block;
  position: relative;
`;

const StyledInput = styled.input`
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border: ${(props: IStyledInput) =>
    props.error ? "solid 1px #ff244e" : "solid 1px #22409a"};
  width: 100%;
  border-rasius: 0;
  background: transparent;
  display: block;
  padding: 1rem;
  font-size: 1rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const Error = styled.span`
  font-size: 12px;
  color: #ff244e;
  position: absolute;
  display: inline-block;
  padding: 0 2%;
`;

class Input extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  private renderError(touched: boolean, error: string) {
    if (!this.props.noUseError) {
      return (
        <ErrorWrapper>
          {touched && error && <Error>{error}</Error>}
        </ErrorWrapper>
      );
    }
  }
  public render() {
    const {
      btnType,
      type,
      input,
      meta: { touched, error },
      ...props,
    } = this.props;
    return (
      <Wrapper>
        <StyledInput
          btnType={btnType}
          type={type}
          error={touched && error}
          {...Object.assign({}, input, props)}
        />
        {this.renderError(touched, error)}
      </Wrapper>
    );
  }
}

export default Input;
