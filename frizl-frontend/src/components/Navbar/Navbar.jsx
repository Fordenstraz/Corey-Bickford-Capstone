// Import
import { Link } from "react-router-dom";
// Styling
import "./Navbar.scss";

export default function BottomNavBar() {
	return (
		<div className="menu-bar">
			<nav className="menu-bar__nav">
				<Link
					to="/dashboard/my_year"
					className="menu-bar__nav-item">
					My Year
				</Link>

				<Link
					to="/dashboard/my_week"
					className="menu-bar__nav-item">
					My Week
				</Link>

				<Link
					to="/dashboard/my_day"
					className="menu-bar__nav-item">
					My Day
				</Link>
			</nav>
		</div>
	);
}
