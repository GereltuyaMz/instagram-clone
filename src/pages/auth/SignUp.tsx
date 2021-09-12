import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { useHistory } from "react-router-dom";

const baseURL = "http://localhost:5000/register";

const SignUp = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const register = () => {
		axios
			.post(baseURL, {
				email: email,
				username: username,
				password: password,
			})
			.then((response) => {
				console.log("Sign up success!!", response);
				history.push('/');
			});
	};

	return (
		<div className="container">
			<div className="border">
				<h1>Instagram</h1>
				<form className="form">
					<input
						placeholder="Email"
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						placeholder="Username"
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						placeholder="Password"
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</form>

				<button className="button" onClick={register}>
					Sign Up
				</button>
				<p className="policy">
					By signing up, you agree to our <b>Terms</b> , <b>Data Policy</b> and{" "}
					<b>Cookies Policy </b>.
				</p>
			</div>
		</div>
	);
};

export default SignUp;
