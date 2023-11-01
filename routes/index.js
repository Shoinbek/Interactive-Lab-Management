var express = require('express');
var router = express.Router();
const Bird = require('../models/bird');

/* GET home page. */
router.get('/', async function(req, res, next) {

  // let newBird = new Bird({
  //   species: 'Parrot',
  //   nickName: 'Something',
  //   status: 'Dead'
  // });

  // try{
  //   await  newBird.save();
  // }catch (err){
  //   console.log(err);
  // }

  // let birds = await Bird.find(); // This will fetch the data from database and display in the console
  // console.log(birds);

  try {
    let birds = await Bird.find();
    console.log(birds);
    
    res.render('index', { birdData: birds });
  } catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
