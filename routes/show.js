var express = require('express');
var router = express.Router();

var database = require('../public/javascripts/database');

/* GET home page. */
router.get('/', function (req, res, next) {
  var name = req.param('name');

  if (name != undefined && name != '') {
    console.log("name is " + name);

    database.select(name).then(function (records) {
      locations = [];

      locations = records;

      console.log("locations : " + locations.length)

      for (var i = 0; i < locations.length; i++) {
        console.log(locations[i].id + " " + locations[i].name)
      }
             
      res.send(locations);

    }).catch((error) => setImmediate(() => {
      console.log(error);
    }));
  } else {
    database.selectAll().then(function (records) {
      locations = [];

      locations = records;

      console.log("locations : " + locations.length)

      for (var i = 0; i < locations.length; i++) {
        console.log(locations[i].id + " " + locations[i].name)
      }

      res.send(locations);
    }).catch((error) => setImmediate(() => {
      console.log(error);
    }));
  }
});

module.exports = router;
