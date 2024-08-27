// Enable Router:
const router = require("express").Router();

// Connect to controller:
const resourceController = require("../controllers/resourceControllers");

// Delegate requests to controller functions:

// POST a new resource:
router.route("/").post(resourceController.newResource);

// GET all resources:
router.route("/").get(resourceController.getResources);

// PUT edit a resource:
//router.route("/").put(resourceController.editResource);

// DELETE a resource:
router.route("/").delete(resourceController.deleteResource);

module.exports = router;
