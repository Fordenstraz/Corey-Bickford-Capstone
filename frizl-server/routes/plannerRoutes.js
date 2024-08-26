// Enable Router:
const router = require("express").Router();

// Connect to controller:
const plannerController = require("../controllers/plannerControllers");

// Delegate requests to controller functions

// POST a new event:
router.route("/planner").post(plannerController.newEvent);

// GET all events:
router.route("/planner").get(plannerController.getEvents);

// PUT edit an event:
//router.route("/planner").put(plannerController.editEvent);

// DELETE an event:
router
	.route("/planner")
	.delete(plannerController.deleteEvent)
	.put(plannerController.update);

module.exports = router;
