import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./router";
import './fonts.css';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
