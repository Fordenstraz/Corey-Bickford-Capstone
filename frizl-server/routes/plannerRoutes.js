// Enable Router:
const router = require("express").Router();

// Connect to controller:
const plannerController = require("../controllers/plannerControllers");

// Delegate requests to controller functions

// POST a new event:
router.route("/").post(plannerController.newEvent);

// GET all events:
router.route("/").get(plannerController.getEvents);

// PUT edit an event:
//router.route("/").put(plannerController.editEvent);

// DELETE an event:
router.route("/").delete(plannerController.deleteEvent);

module.exports = router;
