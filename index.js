const express = require("express");
const { connectDB } = require("./public/modules/func");
const app = express();
const port = 8888;

// Require the router module for handling menu links
const router = require("./public/modules/router");

// Establish a connection to the database
connectDB();

// Set up the view engine and views directory
app.set("view engine", "pug");
app.set("views", "./views");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Use the router for handling routes starting from the root ("/") of the server
app.use("/", router);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}: http://localhost:${port}`);
});