// Imports

// Styling
import "./MyWeek.scss";
// Components
import Calendar from "../../components/Calendar/Calendar";

export default function MyWeekPage() {
	return (
		<section>
			<h1>MY WEEK</h1>
			<Calendar view={"dayGridWeek"} />
		</section>
	);
}
