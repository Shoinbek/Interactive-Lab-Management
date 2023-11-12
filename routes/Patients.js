var express = require('express');
var router = express.Router();
const Bird = require('../models/patient');


router.get('/', async function(req, res, next) {


  try {
    let birds = await Bird.find();
    console.log(birds);
    
    res.render('Patients/index', { birdData: birds });
  } catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/create', async function(req, res, next) {
  let newBird = new Bird(
    {
    creatorId: req.body.creatorId,
    creatorName: req.body.creatorName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    zipCode: req.body.zipCode,
    state: req.body.state,
    phoneNumber: req.body.phoneNumber,
    createDate: req.body.createDate,
    insuranceType: req.body.insuranceType,
    testType: req.body.testType,
    doctorService: req.body.doctorService,
    labName: req.body.labName,
    status: req.body.status
    }
  );
  
  try{
    await newBird.save();
  } catch(err) {
    console.log(err);
  }
  res.redirect('/Patients');
});

router.get('/update',async function(req, res){
  let id = req.query._id;

  let bird = await Bird.findById(id);

  res.render('Patients/edit', {birdData: bird});
});

router.post('/update',async function(req, res){
  let id = req.body._id;

  await Bird.findOneAndUpdate({_id: id},{
    creatorId: req.body.creatorId,
    creatorName: req.body.creatorName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    zipCode: req.body.zipCode,
    state: req.body.state,
    phoneNumber: req.body.phoneNumber,
    createDate: req.body.createDate,
    insuranceType: req.body.insuranceType,
    testType: req.body.testType,
    doctorService: req.body.doctorService,
    labName: req.body.labName,
    status: req.body.status
  });

  res.redirect('/Patients');
});


router.get('/delete', async function(req, res){
  let id = req.query._id;
  await Bird.findByIdAndDelete(id);
  res.redirect('/Patients')
});

module.exports = router;
