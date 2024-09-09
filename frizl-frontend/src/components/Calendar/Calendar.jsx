// Import
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
// Styling
import "./Calendar.scss";
// Functions
// import { useHolidays } from "./CalendarContainer";

// View plugins:
const plugins = [dayGridPlugin, listPlugin, interactionPlugin];

// Temporary array of event objects:
const events = [
	{ title: "event 1", date: "2019-04-01" },
	{ title: "event 2", date: "2019-04-02" },
];

export default function Calendar({ view }) {
	// Get upcoming holidays from context:
	// const holidays = useHolidays();

	// Use state to toggle if weekends are displayed:
	const [toggleWeekends, setToggleWeekends] = useState(true);

	// Call to server for events:
	// to be handled later

	//handler for clicking on a day:
	const handleDateClick = arg => {
		//add logic here:
	};

	return (
		<div className="calendar-container">
			<FullCalendar
				plugins={plugins}
				//what calendar view to use (year, month, week, day)
				initialView={view}
				//whether weekends will be displayed
				weekends={toggleWeekends}
				//enter calendar events
				events={events}
				//date click handler
				dateClick={handleDateClick}
				//event content rendering
				eventContent={showEventDetails}
			/>
		</div>
	);
}

// Additional function created to render event content:
function showEventDetails(eventInfo) {
	return (
		<>
			<b>{eventInfo.timeText}</b>
			<i>{eventInfo.event.title}</i>
		</>
	);
}
