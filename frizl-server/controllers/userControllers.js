// Enable KNEX:
const knex = require("knex")(require("../knexfile"));

// POST a new user profile:
const newUser = async (req, res) => {
	try {
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// GET user data:
const getUserData = async (req, res) => {
	try {
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// PUT edit user data:
// const editUserData = async (req, res) => {
// 	try {
// 	} catch (e) {
//      res.status(400).json({
//			message: `Uh-oh, there's an issue: ${error}`,
//		});}
// };

// DELETE a user:
const deleteUser = async (req, res) => {
	try {
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// Export controller functions:
module.exports = { newUser, getUserData, deleteUser };
