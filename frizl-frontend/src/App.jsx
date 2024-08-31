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
import LoginPage from "./pages/LoginPage";
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

	return (
		<>
			<Router>
				<Routes>
					{/* Redirect to login if user is not signed in */}
					<Route
						path="/"
						element={
							isAuthenticated ? (
								<Navigate to="/dashboard" />
							) : (
								<LoginPage />
							)
						}
					/>

					{/* Dashboard and app routes only accessible if user is authenticated */}
					{isAuthenticated && (
						<>
							<Route
								path="/dashboard"
								element={<FRIZL />}>
								<Route
									index
									element={<Dashboard />}
								/>

								<Route
									path="account"
									element={<ProfilePage />}
								/>

								<Route
									path="resources"
									element={<ResourcesPage />}
								/>

								<Route
									path="my_week"
									element={<MyWeekPage />}
								/>

								<Route
									path="my_day"
									element={<MyDayPage />}
								/>
							</Route>
						</>
					)}

					{/* Catch-all route for unknown pages */}
					<Route
						path="*"
						element={<PageNotFound />}
					/>
				</Routes>
			</Router>
		</>
	);
}
