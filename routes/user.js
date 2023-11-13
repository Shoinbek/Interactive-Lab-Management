var express = require('express');
var router = express.Router();
const Bird = require('../models/patient');


router.get('/', async function(req, res, next) {


  try {
    let birds = await Bird.find();
    console.log(birds);
    
    res.render('user/index', { birdData: birds });
  } catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/create', async function(req, res, next) {
  let newBird = new Bird(
    {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
    }
  );
  
  try{
    await newBird.save();
  } catch(err) {
    console.log(err);
  }
  res.redirect('/user');
});



router.get('/logins', function(req, res, next) {
    res.render('user/logins');
  });
module.exports = router;