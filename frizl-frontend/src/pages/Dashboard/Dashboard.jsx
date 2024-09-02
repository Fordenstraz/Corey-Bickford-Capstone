// Import
import { Outlet } from "react-router-dom";
// Styling
import "./Dashboard.scss";
// Components
import Navbar from "../../components/Navbar/Navbar.jsx";
import SpeedDialMenu from "../../components/SpeedDialMenu/SpeedDialMenu.jsx";

export default function Dashboard() {
	return (
		<div className="dashboard">
			{/* Nav at bottom for mobile, top for large screens */}
			<Navbar />

			{/* Insert page content: */}
			<Outlet />

			{/* Speed dial menu */}
			<SpeedDialMenu />
		</div>
	);
}
