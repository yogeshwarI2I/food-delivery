import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./component/home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>
);
