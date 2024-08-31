// Imports
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
const googleClientId =
	"465419946579-o8m2c35d77rdpqu5f7l41gu46nbj8lr4.apps.googleusercontent.com";

// Render App:
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GoogleOAuthProvider clientId={googleClientId}>
			<App />
		</GoogleOAuthProvider>
	</StrictMode>
);
