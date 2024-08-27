// Enable Router:
const router = require("express").Router();

// Connect to controller:
const userController = require("../controllers/userControllers");

// Delegate requests to controller functions:

// POST a new user profile:
router.route("/").post(userController.newUser);

// GET user data:
router.route("/").get(userController.getUserData);

// PUT edit user data:
//router.route("/account").put(userController.editUserData);

// DELETE a user:
router.route("/account").delete(userController.deleteUser);

module.exports = router;
