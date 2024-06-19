import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import "./output.css";
import SubjectProvider from "./context/SubjectProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SubjectProvider>
      <App />
    </SubjectProvider>
  </React.StrictMode>
);
