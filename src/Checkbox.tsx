import * as React from "react";
import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "./theme";

const {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} = require("styled-system");

const size = 24;
const lineThickness = 3;
const StyledCheckbox = styled.div`
  position: relative;
  float: left;
  margin-right: 12px;
  width: ${size}px;
  height: ${size}px;
  border-radius: 2px;
  background-color: ${colors.white};
  border: solid 1px ${colors.black._20};

  & svg {
    position: absolute;
    & polyline {
      fill: none;
      stroke: ${colors.white};
      stroke-width: ${lineThickness};
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: ${size}px;
      stroke-dashoffset: ${size}px;
      transition: all .3s ease;
    }
  }
`;

const Label = styled.span`
  display: table-cell;
  height: ${size + 2}px;
  pointer-events: none;
  vertical-align: middle;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
`;

const Wrapper = styled.label`
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}

  user-select: none;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 0;

  &.active {
    & ${Label} {
      color: ${colors.blue.royal};
    }
    & ${StyledCheckbox} {
      background-color: ${colors.blue.royal};
      border-color: ${colors.blue.royal};
      & svg {
        & polyline {
          stroke-dashoffset: 0;
        }
      }
    }
    &:hover {
      & ${Label} {
        color: ${colors.blue.deep};
      }
      & ${StyledCheckbox} {
        background-color: ${colors.blue.deep};
        border-color: ${colors.blue.deep};
      }
    }
  }
  &:hover {
    & ${StyledCheckbox} {
      border-color: ${colors.black.standard};
    }
  }
`;

export interface IProps {
  name?: string;
  checked?: boolean;
  // color
  color?: string;
  // fontSize
  fontSize?: number | string;
  // fontWeight
  fontWeight?: number | string;
  // lineHeight
  lineHeight?: number | string;
  // space
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
}

export class Checkbox extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    const { checked } = props;
    this.state = {
      checked: checked
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  private handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      checked: value
    });
  }

  private renderCheckLinePoints() {
    return ( size * 0.2 ) + " " + ( size * 0.45 ) + " "
    + ( size * 0.45 ) + " " + ( size * 0.72 ) + " "
    + ( size * 0.8 ) + " " + ( size * 0.25 );
  }

  public static defaultProps: IProps = {
    checked: false,
    // color
    color: "black.dark",
    // fontSize
    fontSize: "h3",
    // fontWeight
    fontWeight: "regular",
    // lineHeight
    lineHeight: "1.44",
  };

  public render() {
    const { name } = this.props;
    const { checked } = this.state;

    return (
      <Wrapper className={this.state.checked ? "active" : ""} {...this.props}>
        <Input type="checkbox"
          name={name}
          defaultChecked={checked}
          onChange={this.handleInputChange}/>
        <StyledCheckbox>
          <svg width={size + "px"} height={size + "px"} viewBox={"0 0 " + size + " " + size}>
            <polyline points={this.renderCheckLinePoints()}></polyline>
          </svg>
        </StyledCheckbox>
        <Label>{this.props.name ? "(" + this.props.name + ") " : ""}{this.props.children}</Label>
      </Wrapper>
    );
  }
}
