import React, { useState } from "react";
import axios from "axios";
import "../css/style.css";
import { useHistory } from "react-router-dom";

//move base url to .env file
//baseUrl = process.env.BACKEND_URL +

const baseURL = process.env.REACT_APP_BACKEND_URL;

const SignUp = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const register = () => {
		//create axios wrapper if necessary
		axios
			.post(`${baseURL}/register`, {
				email: email,
				username: username,
				password: password,
			})
			.then((response) => {
				console.log("Sign up success!!", response);
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
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						placeholder="Password"
						type="password"
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
