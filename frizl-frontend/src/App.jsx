// Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styling
import "./styles/app.scss";

// Pages
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountPage from "./pages/AccountPage";
import ResourcesPage from "./pages/ResourcesPage";
import MyYearPage from "./pages/MyYear/MyYearPage";
import MyWeekPage from "./pages/MyWeek/MyWeekPage";
import MyDayPage from "./pages/MyDay/MyDayPage";
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

				<Route
					path="/dashboard"
					element={<Dashboard />}>
					<Route
						index
						element={<AccountPage />}
					/>

					<Route
						path="resources"
						element={<ResourcesPage />}
					/>

					<Route
						path="my_year"
						element={<MyYearPage />}
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

				<Route
					path="*"
					element={<PageNotFound />}
				/>
			</Routes>
		</Router>
	);
}
