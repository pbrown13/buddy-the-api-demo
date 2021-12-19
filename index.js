var express = require('express')
const app = express()
const bodyParser = require("body-parser");

const fn = require("./services/apis");

var port = process.env.PORT || 5000;

var host = "0.0.0.0";

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
	response.json({ yo: "Its lit fam" });
});

app.get('/random', fn.getRandom)

// RUN SERVER -- DEF GONNA BE WRITING THIS EVERYTIME TOO
var server = app.listen(port, host, () => {
	console.log("Server is running on port " + port);
});

