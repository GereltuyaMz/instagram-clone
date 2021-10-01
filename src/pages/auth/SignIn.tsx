import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../css/style.css";

const baseURL = process.env.REACT_APP_BACKEND_URL;


const SignIn = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = () => {
		axios
			.post(`${baseURL}/login`, {
				email: email,
				password: password,
			})
			.then((response) => {
				console.log("response =", response);
				//successful login, save jwt token -- for now let's use session storage
				//useUser => use context to save user
				sessionStorage.setItem("user", JSON.stringify(response));
				history.push("/");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className="container">
			<div className="border">
				<h1>Instagram</h1>
				<form className="form">
					<input
						placeholder="username or email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						placeholder="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</form>
				<button type="submit" onClick={login}>
					Log In
				</button>
				<div>
					<a href="#" className="forgot">
						Forgot password?
					</a>
				</div>
			</div>
			<div className="sign-up">
				<span>Don't have an account?</span>
				<Link to="/signup" style={{ textDecoration: "none" }}>
					<span className="link">&nbsp;Sign up</span>
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
