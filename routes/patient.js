var express = require('express');
var router = express.Router();


router.get('/create', function(req, res, next) {
  res.render('patient/create');
});

router.get('/details', function(req, res, next) {
    res.render('patient/details');
  });

// router.get('/logins', function(req, res, next) {
//     res.render('user/logins');
//   });
module.exports = router;
