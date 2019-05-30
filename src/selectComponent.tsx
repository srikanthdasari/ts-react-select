import * as React from "react";
import Select from "react-select";

const options = [
  { value: "test1", label: "Test 1" },
  { value: "test2", label: "Test 2" },
  { value: "test3", label: "Test 3" }
];

interface ISelectComponentProps {}

interface ISelectComponentState {
  selectedOption: string[];
}
// to fix the height -> https://github.com/JedWatson/react-select/issues/1322
const colorStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "grey",
    width: 150,
    height: 15
  }),
  input: styles => ({
    ...styles,
    backgroundColor: "red",
    height: "10px",
    "min-height": "10px"
  }),
  placeholder: styles => ({
    ...styles,
    backgroundColor: "yellow",
    fontSize: 10
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
    textAlign: "left",
    width: 150
  }),
  container: styles => ({ ...styles, width: 150 })
};

class SelectComponent extends React.Component<
  ISelectComponentProps,
  ISelectComponentState
> {
  /**
   *
   */
  constructor(props: ISelectComponentProps) {
    super(props);
    this.state = {
      selectedOption: []
    };
  }

  public render() {
    return (
      <Select
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={colorStyles}
      />
    );
  }
}

export default SelectComponent;
