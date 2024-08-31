// Imports
import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import axios from "axios";

// Pages
import FRIZL from "./pages/FRIZL";
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import ResourcesPage from "./pages/ResourcesPage";
import MyWeekPage from "./pages/MyWeekPage";
import MyDayPage from "./pages/MyDayPage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
	// Use state to track if the user is signed in:
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Placeholder authentication check:
	// useEffect(() => {
	// 	// Replace with actual auth check logic
	// 	axios
	// 		.get("/api/auth/check")
	// 		.then(response => setIsAuthenticated(response.data.isAuthenticated))
	// 		.catch(error =>
	// 			console.error("Error checking authentication", error)
	// 		);
	// }, []);

	return <LoginPage />;
}
