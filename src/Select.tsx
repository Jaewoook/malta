import * as React from "react";
import ReactSelect from "react-select";
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

export interface IItem {
  id: string;
  label: string;
  value: string;
}

export interface IProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  items: IItem[];
}

const styles = {
  control: (styles: any, props: any) => {
    const { isDisabled } = props;
    return {
      ...styles,
      height: "60px",
      borderWidth: 1,
      borderRadius: 2,
      borderColor: "rgba(22, 27, 72, 0.2)",
      boxShadow: "0 2px 6px 2px rgba(22, 27, 72, 0.03)",
      backgroundColor: isDisabled ? "rgba(22, 27, 72, 0.05)" : "#ffffff",
    };
  },
  valueContainer: (styles: any) => {
    return {
      ...styles,
      padding: "0 20px",
      fontSize: "18px",
      color: "#162348",
      fontWeight: 400,
      opacity: 0.9,
    };
  },
  indicatorSeparator: (styles: any) => {
    return {
      display: "none",
    };
  },
  placeholder: (styles: any) => {
    return {
      ...styles,
      fontSize: "18px",
      color: "#162348",
      fontWeight: 300,
      opacity: 0.4,
    };
  },
  menu: (styles: any) => {
    return {
      ...styles,
      borderRadius: 2,
    };
  },
  option: (styles: any, props: any) => {
    const { isFocused } = props;
    return {
      ...styles,
      height: "60px",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      fontSize: "18px",
      color: "#162348",
      fontWeight: 400,
      opacity: 0.9,
      backgroundColor: isFocused ? "rgb(22, 27, 72, 0.05)" : "#ffffff",
      ":active": {
        backgroundColor: "rgb(22, 27, 72, 0.05)",
      },
    };
  },
};

export class Select extends React.Component<IProps, any> {
  private renderLabel() {
    const { label } = this.props;
    if (label) {
      return <Label>{label}</Label>;
    }
    return null;
  }

  public render() {
    const { placeholder, disabled, items } = this.props;
    return (
      <Wrapper>
        {this.renderLabel()}
        <ReactSelect
          placeholder={placeholder || ""}
          isDisabled={disabled}
          name="item"
          options={items}
          styles={styles}
        />
      </Wrapper>
    );
  }
}
