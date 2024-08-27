// Enable KNEX:
const knex = require("knex")(require("../knexfile"));

// POST a new resource:
const newResource = async (req, res) => {
	try {
		res.status(200).json({
			message: `This endpoint works!`,
		});
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// GET all resources:
const getResources = async (req, res) => {
	try {
		res.status(200).json({
			message: `This endpoint works!`,
		});
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// PUT edit a resource:
// const editResource = async (req, res) => {
// 	try {
// 	} catch (e) {}
// };

// DELETE a resource:
const deleteResource = async (req, res) => {
	try {
		res.status(200).json({
			message: `This endpoint works!`,
		});
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// Export controller functions:
module.exports = { newResource, getResources, deleteResource };
