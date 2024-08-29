// Enable KNEX:
const knex = require("knex")(require("../knexfile"));

// Enable Bcrypt and JSON web token:
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authKey = process.env.JWT_SECRET_KEY;

// POST a new user profile:
const newUser = async (req, res) => {
	// verify that all required data was provided:
	const { firstName, lastName, email, location, language, password } =
		req.body;

	try {
		// ensure the provided email has no existing account:
		const existingUser = await knex("users").where({ email }).first();

		if (existingUser) {
			return res
				.status(400)
				.send({
					message:
						"This email is already associated with an account.",
				});
		}

		// create a password hash:
		const hashedPassword = await bcrypt.hash(password, 10);

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
		res.status(201).send({ message: "User registration was successfull!" });
	} catch (error) {
		console.error("Error during user registration:", error);
		res.status(500).send({ message: "Error registering user." });
	}
};

// POST login to an account:
const userLogin = async (req, res) => {
	// ensure proper form submission:
	const { email, password } = req.body;

	try {
		// locate user data in the database:
		const user = await knex("users").where({ email }).first();

		// check the user's credentials:
		if (user && (await bcrypt.compare(password, user.password))) {
			// generate a token for the user:
			const token = jwt.sign({ email: user.email }, SECRET_KEY, {
				expiresIn: "1h",
			});
			res.send({ message: "Login successful!", token });
		} else {
			res.status(401).send({ message: "Invalid login credentials" });
		}
	} catch (error) {
		res.status(500).json({
			message: `Uh-oh, there was an issue while attempting login: ${error}`,
		});
	}
};

// GET user data:
const getUserData = async (req, res) => {
	try {
	} catch (error) {
		res.status(500).json({
			message: `Uh-oh, there's an issue: ${error}`,
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
	try {
	} catch (error) {
		res.status(500).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// Export controller functions:
module.exports = { newUser, userLogin, getUserData, deleteUser };
