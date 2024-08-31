// Import
import React from "react";
import { Outlet } from "react-router-dom";

// Components
import TopNavbar from "../components/TopNavbar/TopNavbar";
import BottomNavBar from "../components/BottomNavbar/BottomNavbar";

export default function FRIZL() {
	return (
		<>
			{/* Nav at the top for larger screens */}
			<TopNavbar />

			{/* Insert page content: */}
			<Outlet />

			{/* Nav at the bottom for small screens */}
			<BottomNavBar />
		</>
	);
}
