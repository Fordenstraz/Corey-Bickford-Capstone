// Import
import { Outlet } from "react-router-dom";
// Styling
import "./Dashboard.scss";
// Components
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function Dashboard() {
	return (
		<div className="dashboard">
			{/* Nav at the top for larger screens */}
			<Navbar />

			{/* Insert page content: */}
			<Outlet />

			{/* Nav at the bottom for small screens */}
			<Navbar />
		</div>
	);
}
