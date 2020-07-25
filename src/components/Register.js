import React from "react";
import "./main.css";
import "./util.css";
import img from "./images/bg-01.jpg";

function Register(){
	return (

	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
					<div className="login100-form-title" style={{ backgroundImage: `url(${img})` }}>
						<button className="login100-form-title-1">Sign in</button>
						<span className="login100-form-title-1">
							Sign up
						</span>
					</div>

				<form className="login100-form validate-form">
					<div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span className="label-input100">Username</span>
						<input className="input100" type="text" name="username" placeholder="Enter username" />
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-26" data-validate="Email is required">
						<span className="label-input100">Email</span>
						<input className="input100" type="email" name="email" placeholder="Enter email" />
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span className="label-input100">Password</span>
						<input className="input100" type="password" name="pass" placeholder="Enter password" />
						<span className="focus-input100"></span>
					</div>


					<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span className="label-input100">Verify Password</span>
						<input className="input100" type="password" name="pass" placeholder="Enter password" />
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	);
}

export default Register;