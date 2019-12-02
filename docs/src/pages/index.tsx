import * as React from "react";
import {
  App,
  Button,
  Flex,
  Icon,
  IconButton,
  Input,
  Select,
  Spinner,
  Split,
  Switch,
  Text,
  Textarea,
  theme,
  Typo,
} from "@salesboost/malta";

const SwitchDocs = () => {

  const [checked, setChecked] = React.useState(false);

  return <>
    <Typo mt={6} name="title_1">Switch</Typo>
    <Switch checked={checked} onClick={() => { setChecked(!checked); }} />
    <Switch checked={checked} disabled onClick={() => { setChecked(!checked); }} />
  </>;
};

interface State {
  value: string;
}

class Index extends React.Component<{}, State> {

  state = {
    value: "",
  };

  render() {
    return (
      <App theme={theme}>
        <div style={{ padding: "60px" }}>
          <Typo name="title_1">Typography</Typo>
          <Flex mt={4} flexDirection="column">
            <Flex flexDirection="row" alignItems="baseline">
              <Typo name="title_1">Title 1</Typo>
              <Typo ml={2} name="title_2">Title 2</Typo>
              <Typo ml={2} name="title_3">Title 3</Typo>
              <Typo ml={2} name="title_4">Title 4</Typo>
              <Typo ml={2} name="title_5">Title 5</Typo>
            </Flex>
            <Flex flexDirection="row" alignItems="baseline">
              <Typo ml={2} name="body_1">Body 1</Typo>
              <Typo ml={2} name="body_2">Body 2</Typo>
              <Typo ml={2} name="body_3">Body 3</Typo>
              <Typo ml={2} name="body_4">Body 4</Typo>
            </Flex>
            <Flex flexDirection="row" alignItems="baseline">
              <Typo ml={2} name="caption_1">Caption 1</Typo>
              <Typo ml={2} name="caption_2">Caption 2</Typo>
              <Typo ml={2} name="highlight_1">Highlight 1</Typo>
              <Typo ml={2} name="highlight_2">Highlight 2</Typo>
            </Flex>
          </Flex>
          <Typo mt={6} name="title_1">Button</Typo>
          <Flex mt={4} flexDirection="column">
            <Typo name="body_1">Normal</Typo>
            <Flex mt={2} flexDirection="row">
              <Button label="Solid" />
              <Button ml={1} line label="Line" />
            </Flex>
            <Typo mt={3} name="body_1">Disabled</Typo>
            <Flex mt={2} flexDirection="row">
              <Button disabled label="Solid" />
              <Button ml={1} line disabled label="Line" />
            </Flex>
            <Typo mt={3} name="body_1">Loading</Typo>
            <Flex mt={2} flexDirection="row">
              <Button loading label="Solid" />
              <Button ml={1} loading line label="Line" />
            </Flex>
            <Typo mt={3} name="body_1">Custom</Typo>
            <Flex mt={2} flexDirection="row">
              <Button color="#000">Solid Custom</Button>
              <Button line><Text color="#f00">Line Custom</Text></Button>
            </Flex>
          </Flex>
          <Typo mt={5} name="title_1">Split</Typo>
          <Split vertical length="20px" bg="#f00" />
          <Split horizontal length="20px" />
          <Typo mt={6} name="title_1">Icon and IconButton</Typo>
          <Flex flexDirection="column">
            <Icon name="image" size={24} />
            <Icon name="arrow-right" size={32} color="#0f0" />
            <Icon name="step" />
            <IconButton name="arrow-left" />
          </Flex>
          <Typo mt={6} name="title_1">Salesboost Kit</Typo>
          <Flex flexDirection="column">
            <Typo mt={2} name="body_2">Input</Typo>
            <Input
              placeholder="Input anything"
              value={this.state.value}
              onTextChange={this.handleInputChange} />
            <Input disabled placeholder="placeholder" />
            <Textarea value={this.state.value} />
            <Textarea disabled placeholder="Placeholder" />
          </Flex>
          <Flex flexDirection="column">
            <Typo mt={2} name="body_2">Spinner</Typo>
            <Spinner bg="#f00" />
            <Typo mt={2} name="body_2">Select</Typo>
            <Select dropdownHeight="210px">
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
              <option>option 6</option>
              <option>option 7</option>
            </Select>
          </Flex>
          <Typo mt={6} name="title_1">Custom</Typo>
          <Flex flexDirection="column">
            <Text of={{ color: "#ff0" }}>Of Text</Text>
            <Typo name="body_1" hover={{ color: "#f00", cursor: "pointer", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Custom Typo Text</Typo>
          </Flex>
          <SwitchDocs />
        </div>
      </App>
    );
  }

  handleInputChange = (value: string) => {
    this.setState((state) => ({
      ...state,
      value,
    }));
  }
}

export default Index;
