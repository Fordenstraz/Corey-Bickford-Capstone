// Import
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../context/UserContext";
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
					value={values.email}
					onChange={handleInputChange}
					autoFocus="on"
					autoComplete="on"
					required
				/>

				<label htmlFor="loginPassword">PASSWORD</label>
				<input
					id="loginPassword"
					type="password"
					name="password"
					value={values.password}
					onChange={handleInputChange}
					required
				/>

				<BasicButton
					label="LOGIN"
					action={confirmLogin}
				/>

				<div className="create-account">
					<p>
						Don't have an account?{" "}
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
