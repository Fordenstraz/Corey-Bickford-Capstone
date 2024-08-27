// Initialize server:
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();

// Environment:
const PORT = process.env.PORT || 5555;

// Enable CORS, and read JSON responses:
app.use(cors());
app.use(express.json());

// Routes:
const userRoutes = require("./routes/userRoutes");
app.use("/account", userRoutes);

const plannerRoutes = require("./routes/plannerRoutes");
app.use("/planner", plannerRoutes);

const resourceRoutes = require("./routes/resourceRoutes");
app.use("/resources", resourceRoutes);

// Error handling:
app.use((error, req, res, next) => {
	console.error(error);
	res.status(500).send("Uh oh! There was an error connecting to the server");
});

// Listen, and confirm:
app.listen(PORT, function () {
	console.log(`FRIZL is running fine, on port ${PORT} 👍`);
});
