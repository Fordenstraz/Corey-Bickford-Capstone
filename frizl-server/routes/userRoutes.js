// Enable Router:
const router = require("express").Router();

// Connect to controller:
const userController = require("../controllers/userControllers");

// Delegate requests to controller functions:

// POST a new user profile:
router.route("/signup").post(userController.newUser);

// POST login to an account:
router.route("/login").post(userController.userLogin);

// GET user data:
router.route("/").get(userController.getUserData);

// PUT edit user data:
//router.route("/edit").put(userController.editUserData);

// DELETE a user:
router.route("/delete").delete(userController.deleteUser);

module.exports = router;
