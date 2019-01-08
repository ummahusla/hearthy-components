import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Atoms/Button/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
