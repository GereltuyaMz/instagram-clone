import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

const baseURL = "http://localhost:5000/login";

const SignIn = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = () => {
		axios
			.post(baseURL, {
				email: email,
				password: password,
			})
			.then((response) => {
				console.log("response =", response);
				history.push("/feed");
			});
	};

	// const handleSubmit = (e: any) => {
	// 	e.preventDefault();
	// };

	return (
		<div className="container">
			<div className="border">
				<h1>Instagram</h1>
				<form className="form">
					<input
						placeholder="username or email"
						type="email"
						className="username"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						placeholder="password"
						type="password"
						id="password"
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
