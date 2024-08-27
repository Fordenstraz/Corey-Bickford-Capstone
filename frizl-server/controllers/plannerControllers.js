// Enable KNEX:
const knex = require("knex")(require("../knexfile"));

// POST a new event:
const newEvent = async (req, res) => {
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

// GET all events:
const getEvents = async (req, res) => {
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

// PUT edit an event:
// const editEvent = async (req, res) => {
// 	try {
// 	} catch (e) {}
// };

// DELETE an event:
const deleteEvent = async (req, res) => {
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
module.exports = { newEvent, getEvents, deleteEvent };
