const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const cors = require("cors");
const collections = require("./routes/api/collections");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

// Config dotenv
dotenv.config({ path: "../.env" });

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(cors());

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
	.connect(process.env.DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("MongoDB successfully connected"))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/collections", collections);

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/../client/build/index.html"));
});

// Listen for requests
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
