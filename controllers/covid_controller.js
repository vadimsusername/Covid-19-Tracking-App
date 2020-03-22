//Store ROUTES// Route get route
var express = require("express");

var router = express.Router(); 


var connection =  require("../config/connection.js");

/////////////////Get Route////////////////////////

router.get("/", function(req, res) {
    connection.query("SELECT * FROM countries;", function(err, data) {
      if (err) throw err;
  
      // Test it
      // console.log('The solution is: ', data);
  
      // Test it
      // return res.send(data);
  
      res.render("index", { countries: data });
    });
  });

/////////////////Get Post//////////////////////////////////////////////////////
//   router.post("/api/countries_history", function (req, res) {
//     connection.create([
//         "country", "date", "confirmed", "deaths" 
//     ], [
//         req.body.country, req.body.date, req.body.confirmed, req.body.deaths
//     ], function (result) {
//         // Send back the ID of the new country
//         res.json({ id: result.insertId });
//     });
// });

/////////////////Alternate Get Post Route////////////////

//   router.post("/api/countries_searched", function (req, res) {
//     connection.create([
//         "country"
//     ], [
//         req.body.country
//     ], function (result) {
//         // Send back the Name of the new country
//         res.json({ name: result.insertName });
//     });
// });



  // Export routes for server.js to use.
module.exports = router;