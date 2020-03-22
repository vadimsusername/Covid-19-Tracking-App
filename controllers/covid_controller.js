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

  // Export routes for server.js to use.
module.exports = router;