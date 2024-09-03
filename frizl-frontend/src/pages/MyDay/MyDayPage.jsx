// Imports

// Styling
import "./MyDay.scss";
// Components
import Calendar from "../../components/Calendar/Calendar";

export default function MyDayPage() {
	return (
		<section>
			<h1>MY DAY</h1>
			<Calendar view={"dayGridDay"} />
		</section>
	);
}
