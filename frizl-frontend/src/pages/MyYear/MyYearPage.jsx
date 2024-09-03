// Import

// Styling
import "./MyYear.scss";
// Components
import Calendar from "../../components/Calendar/Calendar";

export default function MyYear() {
	return (
		<section>
			<h1>MY YEAR</h1>
			<Calendar view={"dayGridYear"} />
		</section>
	);
}
