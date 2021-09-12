import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/profile/index";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true}>
					<SignIn />
				</Route>
				<Route path="/signup" exact={true}>
					<SignUp />
				</Route>
				<Route path="/profile" exact={true}>
					<Profile />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
