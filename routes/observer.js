var express = require('express');
var router = express.Router();
var path =  require('path');
var fs = require('fs');

/* GET observer page. */
// router.get('/', function (req, res, next) {
//   var root = path.resolve();

//   var filename = root + "/public/html/observer.html"  

//   res.sendFile(filename)
// });

// router.get('/', function (req, res) {
//   var root = path.resolve();

//   var filename = root + "/public/html/observer.html"  

//   fs.readFile(filename, function (error, data) {
//       res.send(data.toString());
//   });
// });

router.get('/', function(req, res, next) {
  res.render('observer', { title: 'Observer' });
});

module.exports = router;
