// Enable KNEX:
const knex = require("knex")(require("../knexfile"));

// POST a new event:
const newEvent = async (req, res) => {
	try {
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// GET all events:
const getEvents = async (req, res) => {
	try {
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// PUT edit an event:
// const editEvent = async (req, res) => {
// 	try {
// 	} catch (e) {
//      res.status(400).json({
//			message: `Uh-oh, there's an issue: ${error}`,
//		});}
// };

// DELETE an event:
const deleteEvent = async (req, res) => {
	try {
	} catch (e) {
		res.status(400).json({
			message: `Uh-oh, there's an issue: ${error}`,
		});
	}
};

// Export controller functions:
module.exports = { newEvent, getEvents, deleteEvent };
