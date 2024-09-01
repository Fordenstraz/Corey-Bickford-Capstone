// Import
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
// Styling
import "./LoginPage.scss";

// Components
import BasicButton from "../../components/BasicButton/BasicButton";

// Login Page:
export default function LoginPage({ appUrl }) {
	// Initialize navigation:
	const navigate = useNavigate();

	// Context function to update user data:
	const { updateUser } = useUser();

	// Track input state:
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	// Track error state:
	const [errors, setErrors] = useState({
		email: false,
		password: false,
	});

	// Input handler:
	const handleInputChange = event => {
		const { name, value } = event.target;
		// spread values back into state, changing only the modified value:
		setValues({
			...values,
			[name]: value,
		});

		// clear error state when user starts typing:
		setErrors({
			...errors,
			[name]: false,
		});
	};

	// Google OAuth success handler:
	const handleGoogleSuccess = async response => {
		const { credential } = response;

		// Here you would typically send the credential to your server to validate the user or create a new user.
		console.log("Google login successful", credential);
		navigate("/dashboard");
	};

	// Google OAuth failure handler:
	const handleGoogleFailure = error => {
		console.error("Google login failed", error);
		alert("Google login failed. Please try again.");
	};

	// Login handler:
	const confirmLogin = async event => {
		event.preventDefault();

		// check for valid inputs:
		const missingInputValue = {
			// 'missingInputValue' is true if value is empty:
			email: !values.email,
			password: !values.password,
		};

		setErrors(missingInputValue);

		// if no errors, continue to login:
		if (!missingInputValue.email && !missingInputValue.password) {
			try {
				// axios POST login attempt to server:
				const response = await axios.post(
					`${appUrl}/account/login`,
					{
						email: values.email,
						password: values.password,
					},
					{
						// enable cookies with the request:
						withCredentials: true,
					}
				);

				// verify successful login:
				if (response.status === 200) {
					console.log("Successful login.");

					// GET user data request:
					const userData = await axios.get(`${apiUrl}/account`);

					// set user data in the user context:
					updateUser(userData);

					// Navigate to the dashboard:
					navigate("/Dashboard");
				} else {
					console.log("Login failed.");
				}
			} catch (error) {
				console.error("Uh-oh! An error ocurred during login:", error);
			}
		}
	};

	return (
		<>
			<h1>Welcome to FRIZL</h1>

			<form className="login-form">
				<label htmlFor="loginEmail">EMAIL</label>
				<input
					id="loginEmail"
					type="email"
					name="email"
					placeholder="Me@email.com"
					value={values.title}
					autoFocus="on"
					autoComplete="on"
					required
				/>

				<label htmlFor="loginPassword">PASSWORD</label>
				<input
					id="loginPassword"
					type="password"
					name="password"
					value={values.title}
					required
				/>

				<BasicButton
					label="LOGIN"
					action={confirmLogin}
				/>

				<div className="oauth-wrapper">
					<p>Login with another account</p>
					<GoogleLogin
						onSuccess={handleGoogleSuccess}
						onError={handleGoogleFailure}
					/>
				</div>

				<div className="create-account">
					<p>
						Don't have an account?
						<Link
							to="#"
							onClick={() =>
								console.log("Open create account modal")
							}>
							Create one here
						</Link>
					</p>
				</div>
			</form>
		</>
	);
}
