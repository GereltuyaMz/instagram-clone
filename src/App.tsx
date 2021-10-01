import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/profile/index";
import Feed from "./pages/feed/index";
import Discover from "./pages/discover/index";
import { Header } from "./components";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact={true}>
					{sessionStorage.getItem("user") !== null ? <Feed /> : <SignIn />}
				</Route>
				<Route path="/signin" exact={true}>
					<SignIn />
				</Route>
				<Route path="/signup" exact={true}>
					<SignUp />
				</Route>
				<Route path="/feed" exact={false}>
					<Feed />
				</Route>
				<Route path="/discover" exact={true}>
					<Discover />
				</Route>
				<Route path="/profile" exact={true}>
					<Profile />
				</Route>
			</Switch>
		</>
	);
}

export default App;
