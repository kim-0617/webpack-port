import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";

ReactDom.createRoot(document.querySelector("#root")).render(<App />);
