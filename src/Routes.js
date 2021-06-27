import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HannahGallery from "./comps/HannahGallery";
import LandingPage from "./comps/LandingPage";
import DylanGallery from "./comps/DylanGallery"
import Login from "./comps/Login";
import { AuthProvider } from "./hooks/AuthContext";
import ForgotPassword from "./comps/ForgotPassword";

function Routes() {
  return (
    <div>
      <AuthProvider>
      <Switch>
        <Route exact path="/hannah" component={HannahGallery} />
        <Route exact path="/dylan" component={DylanGallery}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default Routes;
