import * as React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
    className: PropTypes.string
};

const defaultProps = {
    tag: "div"
};

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  color: ${variable.blue};
  background: #22409a;
  &:hover {
    background: #425FF3;
    color: #ffffff;
  }
`;

const Button = (props) => {
    const {
        className,
        ...attributes
    } = props;

    const classes = classNames("sb-btn", className);
    return (
        <StyledButton className={classes}>테스트</StyledButton>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;