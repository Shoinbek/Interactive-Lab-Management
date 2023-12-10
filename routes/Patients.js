var express = require('express');
const Patients = require('../models/Patients');
var router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/Create', authMiddleware.ensureAuthenticated, function(req, res, next) {
    res.render('Patient/Create');   
});

router.get('/csv-export',async function(req,res,next){
  let patients = await Patients.find();
  let csv = 'creatorId,creatorName,firstName,lastName,birthDate,zipCode,state,phoneNumber,createDate,insuranceType,testType,doctorService,labName,Status\n ';

  patients.forEach(function(p) {
    csv += `${p.creatorId},${p.creatorName},${p.firstName},${p.lastName},${p.birthDate},${p.zipCode},${p.state},${p.phoneNumber},${p.createDate},${p.insuranceType},${p.testType},${p.doctorService},${p.labName},${p.Status}\n`;
  });

  res.setHeader('Content-type', 'text/csv' );
  res.attachment('patients.csv');
  return res.send(csv);
});

router.get('/Details', authMiddleware.ensureAuthenticated, function(req, res, next) {
  res.render('Patient/Details');   
});


module.exports = router;
