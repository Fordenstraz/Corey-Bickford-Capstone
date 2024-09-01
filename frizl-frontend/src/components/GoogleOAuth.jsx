export default function GoogleOAuth() {
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

	return (
		<div className="oauth-wrapper">
			<p>Login with another account</p>
			<GoogleLogin
				onSuccess={handleGoogleSuccess}
				onError={handleGoogleFailure}
			/>
		</div>
	);
}
