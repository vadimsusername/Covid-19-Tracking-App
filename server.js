// Dependencies
var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var axios = require("axios");
// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var db = require("./models");
// Middleware for JSON Parsing Application Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
///Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

console.log("test")

// Import routes and give the server access to them.
var routes = require("./controllers/covid_controller.js");

app.use(routes);

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Start our server so that it can begin listening to client requests.
/* app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
}); */
/* function sortCountries(a,b){
   var countryA = a.TotalConfirmed;
   var countryB = b.TotalConfirmed;
   return countryA -
} */
db.sequelize.sync().then(function() {

  db.Stat.destroy({
    where: {},
    truncate: true
  });
  
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
    var queryURL ='https://api.covid19api.com/summary'
    axios.get(queryURL).then(function(res){
      //console.log(res.data);
      var countries = res.data.Countries;

      countries.sort(function(a,b){
        //console.log(a);
        //console.log(b);
        //console.log(`${a.ToltalConfirmed}, ${b.ToltalConfirmed}`);
        if(a.TotalConfirmed < b.TotalConfirmed){
          return 1;
        }else{
          return -1;
        }
        //return b.TotalConfirmed - a.TotalConfirmed;
      });
      db.Stat.bulkCreate([{
        country : countries[0].Country,
        confirmed : countries[0].TotalConfirmed,
        deaths: countries[0].TotalDeaths
      },{
        country : countries[1].Country,
        confirmed : countries[1].TotalConfirmed,
        deaths: countries[1].TotalDeaths
      },{
        country : countries[2].Country,
        confirmed : countries[2].TotalConfirmed,
        deaths: countries[2].TotalDeaths
      },{
        country : countries[3].Country,
        confirmed : countries[3].TotalConfirmed,
        deaths: countries[3].TotalDeaths
      }]).then(function(dbSearch){
        return;
      });
     // console.log(countries);

  
    });
  });
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
