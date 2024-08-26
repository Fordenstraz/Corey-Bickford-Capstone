// Enable Router:
const router = require("express").Router();

// Connect to controller:
const resourceController = require("../controllers/resourceControllers");

// Delegate requests to controller functions:

// POST a new resource:
router.route("/resources").post(resourceController.newResource);

// GET all resources:
router.route("/resources").get(resourceController.getResources);

// PUT edit a resource:
//router.route("/resources").put(resourceController.editResource);

// DELETE a resource:
router
	.route("/resources")
	.delete(resourceController.deleteResource)
	.put(resourceController.update);

module.exports = router;
