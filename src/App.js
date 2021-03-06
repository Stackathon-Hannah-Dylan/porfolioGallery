import React from "react";
import Navbar from "./comps/Navbar";
import Routes from "./Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./hooks/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </div>
  );
}

export default App;
