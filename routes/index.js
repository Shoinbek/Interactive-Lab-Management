const express = require('express');
const Patients = require('../models/Patients');
const router = express.Router();
const authMiddleware = require('../middleware/auth');



router.get('/', authMiddleware.ensureAuthenticated, async function(req, res, next) {

  res.render('index');
});


router.get('/Patients/Details', authMiddleware.ensureAuthenticated, async function (req, res, next) {
  try {
    const patients = await Patients.find(); // Fetch patient data from the database
    res.render('Patient/Details', { PatientsData: patients }); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/Patients/Details', authMiddleware.ensureAuthenticated, async function (req, res, next) {
  try {
    const newPatient = new Patients({
      creatorId: req.body.creatorId,
      creatorName: req.body.creatorName,
      firstName: req.body.creatorName,
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
      status: req.body.status,
      
    });
    await newPatient.save(); 
    res.redirect('/Patients/Details'); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to create a new patient');
  }
});

// For editing patients data
router.get('/update', authMiddleware.ensureAuthenticated, async function (req, res){
  let id = req.query._id;

  let patient = await Patients.findById(id);

  res.render('Patients/Edit', { PatientsData: patient });
});

router.post('/update', authMiddleware.ensureAuthenticated, async function(req, res){
  let id = req.body._id;

  await Patients.findOneAndUpdate({_id: id},{
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
    status: req.body.status,

  });

  res.redirect('/Patients/Details');

});


// To Delete patients data and stay on the same page
router.get('/delete', authMiddleware.ensureAuthenticated, async function(req, res){
  let id = req.query._id;

  await Patients.findByIdAndDelete(id);

  res.redirect('/Patients/Details');
});

module.exports = router;
