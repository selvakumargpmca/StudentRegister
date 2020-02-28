import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Student from "./Student";

const rootElement1 = document.getElementById("root1");
const rootElement2 = document.getElementById("root2");
// ReactDOM.render(<student />, rootElement);
ReactDOM.render(<Student />, rootElement2);
ReactDOM.render(<App />, rootElement1);
