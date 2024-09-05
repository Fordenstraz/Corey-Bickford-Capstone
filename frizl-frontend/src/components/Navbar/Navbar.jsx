// Import
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Styling
import "./Navbar.scss";

export default function Navbar() {
	// Logic for highlighting current menu option:
	//
	// enables path checking:
	const view = useLocation();
	// current view is held in state:
	const [activeView, setActiveView] = useState(view.pathname);
	// update state when a new view is selected:
	useEffect(() => {
		setActiveView(view.pathname);
	}, [view.pathname]);
	// set the selected view as 'currentView':
	const currentView = path => activeView === path;

	return (
		<div className="menu-bar">
			<nav className="menu-bar__nav">
				<Link
					to="/dashboard/my_year"
					className={`menu-bar__nav-item ${
						currentView("/dashboard/my_year")
							? "menu-bar__nav-item--selected"
							: ""
					}`}>
					My Year
				</Link>

				<Link
					to="/dashboard/my_month"
					className={`menu-bar__nav-item ${
						currentView("/dashboard/my_month")
							? "menu-bar__nav-item--selected"
							: ""
					}`}>
					My Month
				</Link>

				<Link
					to="/dashboard/my_week"
					className={`menu-bar__nav-item ${
						currentView("/dashboard/my_week")
							? "menu-bar__nav-item--selected"
							: ""
					}`}>
					My Week
				</Link>

				<Link
					to="/dashboard/my_day"
					className={`menu-bar__nav-item menu-bar__extra-nav-option ${
						currentView("/dashboard/my_day")
							? "menu-bar__nav-item--selected"
							: ""
					}`}>
					My Day
				</Link>
			</nav>
		</div>
	);
}
