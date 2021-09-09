import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SignIn = () => {
	return (
		<div className="container">
			<div className="border">
				<h1>Instagram</h1>
				<form className="form">
					<input placeholder="username or email" type="email" className="username" />
					{/* <label className="label">Username</label> */}
					<input placeholder="password" type="password" id="password" />
				</form>
				<button>Log In</button>
				<div>
					<a href="#" className="forgot">
						Forgot password?
					</a>
				</div>
			</div>
			<div className="sign-up">
				<span>Don't have an account?</span>
				<Link to="/auth/SignUp" style={{ textDecoration: "none" }}>
					<span className="link">&nbsp;Sign up</span>
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
