// Imports

// Styling
import "./MyMonth.scss";
// Components
import Calendar from "../../components/Calendar/Calendar";

export default function MyMonthPage() {
	return (
		<section>
			<h1>MY Month</h1>
			<Calendar view={"dayGridMonth"} />
		</section>
	);
}
