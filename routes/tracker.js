var express = require('express');
var router = express.Router();
var path =  require('path');
var fs = require('fs');

/* GET tracker page. */
// router.get('/', function (req, res, next) {
//   //var root = path.dirname(require.main.filename)

//   var root = path.resolve();

//   var filename = root + "/public/html/tracker.html"

//   res.sendFile(filename)
// });

// router.get('/', function (req, res) {
//   var root = path.resolve();

//   var filename = root + "/public/html/tracker.html"

//   fs.readFile(filename, function (error, data) {
//       res.send(data.toString());
//   });
// });

router.get('/', function(req, res, next) {
  res.render('tracker', { title: 'Tracker' });
});

module.exports = router;
