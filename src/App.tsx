import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
	return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <SignIn />
        </Route>
        <Route path="/auth/SignUp" exact={true}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
