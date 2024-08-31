// Import
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Styling
import "./LoginPage.scss";

// Components
import BasicButton from "../../components/BasicButton/BasicButton";

// Login Page:
export default function LoginPage() {
	// Initialize navigation:
	const navigate = useNavigate();

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

	// Submission handler:
	const confirmSubmit = event => {
		event.preventDefault();

		// check for valid inputs:
		const missingInputValue = {
			// 'missingInputValue' is true if value is empty:
			title: !values.title,
			description: !values.description,
		};

		setErrors(missingInputValue);

		// if no errors, continue:
		if (!missingInputValue.title && !missingInputValue.description) {
			// check posting time:
			const postedTime = new Date();
			const timestamp = postedTime.getTime();

			// axios POST to server:
			axios
				.post("http://localhost:8080/videos/upload", {
					title: values.title,
					channel: "Mohan Muruge",
					image: uploadVideoThumbnail,
					altText:
						"A close up of a runner on the starting blocks, holding a relay baton",
					description: values.description,
					views: 0,
					likes: 0,
					duration: "12:34",
					video: uploadVideoThumbnail,
					timestamp: timestamp,
					comments: [],
				})
				.catch(error => console.log(error));

			alert("Video upload successful");
			fetchVideoList();
			scrollToTop();
			navigate("/");
		}
	};

	return (
		<>
			<h1>Welcome to FRIZL</h1>

			<form>
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

				<BasicButton />
			</form>
		</>
	);
}
