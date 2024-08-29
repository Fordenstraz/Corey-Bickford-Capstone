// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// Styling
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Pages
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import ResourcesPage from "./pages/ResourcesPage";
import MyWeekPage from "./pages/MyWeekPage";
import MyDayPage from "./pages/MyDayPage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
	return (
		<>
			<CssBaseline />
			<Router>
				<Routes>
					<Route //login page
						path="/"
						element={<LoginPage />}
					/>

					<Route //dashboard (year-view)
						path="/dashboard"
						element={<Dashboard />}
					/>

					<Route //profile page
						path="/account"
						element={<ProfilePage />}
					/>

					<Route //resources page
						path="/resources"
						element={<ResourcesPage />}
					/>

					<Route //week-view page
						path="/my_week"
						element={<MyWeekPage />}
					/>

					<Route //day-view page
						path="/my_day"
						element={<MyDayPage />}
					/>

					<Route //page not found
						path="*"
						element={<PageNotFound />}
					/>
				</Routes>
			</Router>
		</>
	);
}
