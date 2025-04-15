import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css"; // Import do Bootstrap
import "./index.css"; // Se quiser manter algo customizado

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
