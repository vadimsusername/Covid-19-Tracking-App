// Dependencies
var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Middleware for JSON Parsing Application Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

console.log("test")

// Import routes and give the server access to them.
var routes = require("./controllers/covid_controller.js");

app.use(routes);


//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));









//////////////////// DATA SECTION/////////////////////


// Routes

//app.get("/index")
//app.get("/", function(req, res) {
//////////////////////////////////// MYSQL DATA  /////////////////////////////////////////////////////
//   // If the main route is hit, then we initiate a SQL query to grab all records.
//   // All of the resulting records are stored in the variable "result."
//   connection.query("SELECT * FROM countries", function(err, result) {
//     if (err) throw err;
//     // We then begin building out HTML elements for the page.
//     var html = "<h1> COVID-19 Tracking App </h1>";

//     // Here we begin an unordered list.
//     html += "<ul>";

//     // We then use the retrieved records from the database to populate our HTML file.
//     for (var i = 0; i < result.length; i++) {
//       html += "<li><p> ID: " + result[i].id + "</p>";
//       html += "<p>Country: " + result[i].countryName + " </p>";
//       html += "<p>Country: " + result[i].incidents + " </p>";
//       html += "<p>Country: " + result[i].deaths + " </p></li>";

//     }
  

//     // We close our unordered list.
//     html += "</ul>";

//     // Finally we send the user the HTML file we dynamically created.
//     res.send(html);
//   });
// });
/////////////////////////////////////MYSQL DATA ABOVE  /////////////////////////////////////////////////////////////
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});



// var PORT = process.env.PORT || 8080; // For Pushing to Heroku

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + "/public"));

// // Parse application body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// // var routes = require("./controllers/burgers_controllers.js"); MoHold OFF ON////////

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
