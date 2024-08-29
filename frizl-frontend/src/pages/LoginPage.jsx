// Imports

// Styling

// Components

// Login Page:
export default function LoginPage() {
	return (
		<header>
			<SignedOut>
				<h1>Welcome to FRIZL</h1>

				<SignInButton mode="modal">
					<button>Let's go!</button>
				</SignInButton>
			</SignedOut>

			<SignedIn>
				<h2>Welcome back!</h2>

				<UserButton />
			</SignedIn>
		</header>
	);
}
