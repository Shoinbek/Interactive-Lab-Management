var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/Create', authMiddleware.ensureAuthenticated, function(req, res, next) {
    res.render('Patient/Create');   
});

router.get('/Details', authMiddleware.ensureAuthenticated, function(req, res, next) {
  res.render('Patient/Details');   
});

module.exports = router;
