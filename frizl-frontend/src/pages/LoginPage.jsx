// Imports

// Styling

// Components
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/clerk-react";

export default function LoginPage() {
	return (
		<header>
			<SignedOut>
				<h2>Please sign in:</h2>

				<SignInButton />
			</SignedOut>

			<SignedIn>
				<h2>Welcome back!</h2>

				<UserButton />
			</SignedIn>
		</header>
	);
}
