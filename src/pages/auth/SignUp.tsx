import React from "react";
import "./style.css";

const SignUp = () => {
	return (
		<div className="container">
			<div className="border">
				<h1>Instagram</h1>
				<form className="form">
					<input placeholder="Email" type="email" id="email" />
					<input placeholder="Name" type="text" id="name" />
					<input placeholder="Username" type="text" id="username" />
					<input placeholder="Password" type="password" id="password" />
				</form>
				<button className="button">Sign Up</button>
				<p className="policy">
					By signing up, you agree to our <b>Terms</b> , <b>Data Policy</b> and{" "}
					<b>Cookies Policy </b>.
				</p>
			</div>
		</div>
	);
};

export default SignUp;
