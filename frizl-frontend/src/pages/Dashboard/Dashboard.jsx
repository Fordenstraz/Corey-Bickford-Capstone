// Import
import { useState, useEffect, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
// Styling
import "./Dashboard.scss";
// Components
import Navbar from "../../components/Navbar/Navbar.jsx";
import SpeedDialMenu from "../../components/SpeedDialMenu/SpeedDialMenu.jsx";

// Demo user data to test API call:
const userData = {
	currentYear: 2024,
	province: "BC",
};

// Create a context for stat holidays:
const HolidaysContext = createContext();

// Add a hook to use the holidays context:
const useHolidays = () => {
	return useContext(HolidaysContext);
};

// Export hook for use in child components:
export { useHolidays };

export default function Dashboard() {
	// State to track upcoming holidays:
	const [holidays, setHolidays] = useState([]);

	// Hook to call the API on page load:
	useEffect(() => {
		// function to fetch holidays:
		const fetchHolidays = async () => {
			try {
				const response = await axios.get(
					`https://canada-holidays.ca/api/v1/provinces/${userData.province}`
				);

				// handle any request errors:
				if (response.status !== 200) {
					console.log(`An error occurred during the request.`);
				}

				// confirm response data:
				if (
					!response.data ||
					!response.data.province ||
					!response.data.province.holidays
				) {
					console.error("No holidays data found in response.");
					return;
				}

				// save the data:
				const holiData = response.data.province.holidays;

				// map the data into the FullCalendar format:
				const upcomingHolidays = holiData.map(holiday => ({
					title: holiday.nameEn,
					start: holiday.observedDate,
					allDay: true,
				}));

				// save holiday array to state:
				setHolidays(upcomingHolidays);
			} catch (error) {
				console.error(" Error fetching holidays: ", error.message);
			}
		};

		// call the function:
		fetchHolidays();
	}, [userData.province]);

	return (
		<main className="dashboard">
			{/* Nav at bottom for mobile, top for large screens */}
			<Navbar />

			<div className="dashboard__outlet">
				<HolidaysContext.Provider value={holidays}>
					{/* Insert page content: */}
					<Outlet holidays={holidays} />
				</HolidaysContext.Provider>
			</div>

			{/* Speed dial menu */}
			<SpeedDialMenu />
		</main>
	);
}
