import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);
root.render(<Home />);
