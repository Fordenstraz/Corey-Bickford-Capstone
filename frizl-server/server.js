require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 7770;

app.listen(port, function () {
	console.log(`Server is running fine on port ${port} 👍`);
});
