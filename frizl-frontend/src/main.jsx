// Imports
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Styling

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
