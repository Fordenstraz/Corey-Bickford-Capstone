// Imports
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
// Styling
import "./main.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
