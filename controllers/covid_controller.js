//Store ROUTES// Route get route
var express = require("express");

var router = express.Router(); 

var connection =  require("../config/connection.js");

var db = require("../models");
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

  router.post("/api/countries",function(req,res){
      var country_name = req.body.country_name;
      db.Search.create({
        country : req.body.country_name,
        searched : 0
      }).then(function(dbSearch){
        res.json(dbSearch);
      });

  });
  // Export routes for server.js to use.
module.exports = router;

