import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function Calendar() {
	//handler for clicking on a day:
	const handleDateClick = arg => {
		alert(arg.dateStr);
	};

	return (
		<FullCalendar
			plugins={[dayGridPlugin]}
			//initialView decides what calendar view to use (year, month, week, etc)
			initialView='dayGridMonth'
			//select whether weekends will be displayed
			weekends={false}
			//enter calendar events
			events={[
				{ title: "event 1", date: "2019-04-01" },
				{ title: "event 2", date: "2019-04-02" },
			]}
			//date click handler
			dateClick={handleDateClick}
			//event content rendering
			eventContent={renderEventContent}
		/>
	);
}

// Additional function created to render event content:
function renderEventContent(eventInfo) {
	return (
		<>
			<b>{eventInfo.timeText}</b>
			<i>{eventInfo.event.title}</i>
		</>
	);
}
