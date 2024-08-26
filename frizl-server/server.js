// Initialize server:
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 7770;
require("dotenv").config();

// Enable CORS, and read JSON responses:
app.use(express.json());
app.use(cors());

// Routes:
const userRoutes = require("./routes/userRoutes");
app.use("/account", userRoutes);
const plannerRoutes = require("./routes/plannerRoutes");
app.use("/planner", plannerRoutes);
const resourceRoutes = require("./routes/resourceRoutes");
app.use("/resources", resourceRoutes);

// Listen, and confirm:
app.listen(port, function () {
	console.log(`Server is running fine on port ${port} 👍`);
});
