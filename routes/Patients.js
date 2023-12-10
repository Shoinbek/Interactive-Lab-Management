var express = require('express');
const Patients = require('../models/Patients');
var router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/Create', authMiddleware.ensureAuthenticated, function(req, res, next) {
    res.render('Patient/Create');   
});

router.get('/csv-export',async function(req,res,next){
  let patient = await Patients.find();
  let csv = 'creatorId,creatorName,firstName,lastName,birthDate,zipCode,state,phoneNumber,createDate,insuranceType,testType,doctorService,labName,Status\n ';

  for(let patient of Patients){
    csv += '${patient.creatorId},${patient.creatorName},${patient.firstName},${patient.lastName},${patient.birthDate},${patient.zipCode},${patient.state},${patient.phoneNumber},${patient.createDate},${patient.insuranceType},${patient.testType},${patient.doctorService},${patient.labName},${patient.Status}\n';
  }
  res.Header('Content-type', 'text/csv' );
  res.attachment('patients.csv');
  return res.send(csv);
});

router.get('/Details', authMiddleware.ensureAuthenticated, function(req, res, next) {
  res.render('Patient/Details');   
});


module.exports = router;
