// Enable KNEX:
const knex = require("knex")(require("../knexfile"));

// Enable Bcrypt and JSON web token:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authKey = process.env.JWT_SECRET_KEY;

// POST a new user profile:
const newUser = async (req, res) => {
	// verify that all required data was provided:
	const { firstName, lastName, email, location, frenchImmersion, password } =
		req.body;

	if (!firstName || !lastName || !email || !password) {
		return res
			.status(400)
			.json({ message: "Please fill all required fields." });
	}

	// attempt to ceate a new user account:
	try {
		// ensure the provided email has no existing account:
		const existingUser = await knex("users").where({ email }).first();

		if (existingUser) {
			return res.status(400).json({
				message: "This email is already associated with an account.",
			});
		}

		// create a password hash:
		const hashedPassword = await bcrypt.hash(password, 12);

		// add new user to the database:
		await knex("users").insert({
			firstName,
			lastName,
			email,
			location,
			frenchImmersion,
			password: hashedPassword,
		});

		// send response:
		res.status(201).json({ message: "User registration was successfull!" });
	} catch (error) {
		console.error("Error during user registration:", error);
		res.status(500).json({ message: "Error registering user." });
	}
};

// POST login to an account:
const userLogin = async (req, res) => {
	// ensure proper form submission:
	const { email, password } = req.body;

	if (!email || !password) {
		return res
			.status(400)
			.json({ message: "Email and password are required." });
	}

	// attempt to authenticate the user:
	try {
		// locate user data in the database:
		const user = await knex("users").where({ email }).first();

		// check the user's credentials:
		if (user && (await bcrypt.compare(password, user.password_hash))) {
			// generate a token for the user:
			const token = jwt.sign({ email: user.email }, authKey, {
				// token duration:
				expiresIn: "6h",
			});

			// set the token as an HTTP-only cookie:
			res.cookie("token", token, {
				httpOnly: true,
				// in production, only send cookie over HTTPS:
				secure: process.env.NODE_ENV === "production",
				sameSite: "Strict",
				// set cookie expiry to match token duration:
				maxAge: 6 * 60 * 60 * 1000,
			});

			res.status(200).json({ message: "Login successful!" });
		} else {
			res.status(401).json({ message: "Invalid login credentials." });
		}
	} catch (error) {
		console.error("Error during login attempt:", error);
		res.status(500).json({
			message: `Uh-oh, there was an issue while attempting to login.`,
		});
	}
};

// GET user data:
const getUserData = async (req, res) => {
	try {
		const userFound = await knex("users").where("users.id");

		//if no item is found return 404:
		if (userFound.length === 0) {
			return res.status(404).json({
				message: `no user found with the email: ${req.email}`,
			});
		}

		const userData = userFound[0];
		res.json(userData);
	} catch (error) {
		res.status(500).json({
			message: `Uh-oh, there's an issue: ${error.message}`,
		});
	}
};

// PUT edit user data:
// const editUserData = async (req, res) => {
// 	try {
// 	} catch (error) {
//      res.status(500).json({
//			message: `Uh-oh, there's an issue: ${error}`,
//		});}
// };

// DELETE a user:
const deleteUser = async (req, res) => {
	// attempt to delete user data:
	try {
		// verify that a user ID has been provided:
		const userId = req.body.id;

		if (!userId) {
			return res
				.status(400)
				.json({ message: "A user ID is required to delete a user." });
		}

		// ensure that the provided user ID is valid:
		const user = await knex("users").where({ id: userId }).first();

		if (!user) {
			return res.status(404).json({ message: "User not found." });
		}

		// delete the user data from the database:
		await knex("users").where({ id: userId }).del();

		// Send a success response:
		res.status(200).json({ message: "User deleted successfully." });
	} catch (error) {
		console.error("Error deleting user:", error.message);
		res.status(500).json({
			message: `Uh-oh, there's an issue: ${error.message}`,
		});
	}
};

// Export controller functions:
module.exports = { newUser, userLogin, getUserData, deleteUser };
