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
	// Set API URL:
	const appUrl = import.meta.env.VITE_API_URL;

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<LoginPage appUrl={appUrl} />}
				/>
			</Routes>
		</Router>
	);
}
