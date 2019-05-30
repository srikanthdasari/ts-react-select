import * as React from "react";
import { render } from "react-dom";
import SelectComponent from "./selectComponent";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <SelectComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
