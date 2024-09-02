// Import
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Styling
import "./SpeedDialMenu.scss";

export default function SpeedDialMenu() {
	// Use state to track if menu is open:
	const [isOpen, setIsOpen] = useState(false);

	// function to open and close the menu:
	const toggleSpeedDial = () => {
		setIsOpen(!isOpen);
	};

	// Logic for highlighting current menu option:
	const view = useLocation(); // enables path checking
	// current view is held in state:
	const [activeView, setActiveView] = useState(view.pathname);
	// update state when a new view is selected:
	useEffect(() => {
		setActiveView(view.pathname);
	}, [view.pathname]);
	// set the selected view as 'currentView':
	const currentView = path => activeView === path;

	return (
		<div className="speed-dial">
			<button
				className={`speed-dial__button ${
					isOpen === true ? "speed-dial__button--active" : ""
				}`}
				onClick={toggleSpeedDial}>
				+
			</button>

			{isOpen && (
				<div className="speed-dial__menu">
					<Link
						to="/dashboard"
						className={`speed-dial__menu-option ${
							currentView("/dashboard")
								? "speed-dial__menu-option--selected"
								: ""
						}`}>
						A
					</Link>

					<Link
						to="/dashboard/resources"
						className={`speed-dial__menu-option ${
							currentView("/dashboard/resources")
								? "speed-dial__menu-option--selected"
								: ""
						}`}>
						R
					</Link>

					<Link
						to="/dashboard"
						className="speed-dial__menu-option">
						L
					</Link>
				</div>
			)}
		</div>
	);
}
