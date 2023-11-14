var express = require('express');
var router = express.Router();
const Bird = require('../models/patients');
const authMiddleware = require('../middleware/auth');
/* GET home page. */
router.get('/', async function(req, res, next) {

    res.render('index');
});
  

module.exports = router;
