// Imports

// Styling
import "./MyDay.scss";
// Components
import Calendar from "../../components/Calendar/Calendar";

export default function MyDayPage() {
	return (
		<section className="day-wrapper">
			<h1>MY DAY</h1>
			<Calendar view={"listDay"} />
		</section>
	);
}
