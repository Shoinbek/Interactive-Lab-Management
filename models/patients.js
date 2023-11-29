const mongoose = require('mongoose')

const { Schema } = mongoose;

const PatientsSchema = new Schema({
    creatorId: {type: String, required: true},
    creatorName: {type: String,required: true},
    firstName: {type: String,required: true},
    lastName: { type: String,required: true},
    birthDate: {type: Date, required: true},
    zipCode: {type: String,required: true},
    state: {type: String,required: true},
    phoneNumber: {type: String,required: true},
    createDate: {type: Date, required: true},
    insuranceType: {type: String,required: true},
    testType: {type: String,required: true},
    doctorService: {type: String,required: true},
    labName: {type: String,required: true},
    status: {type: String, enum: ['Stable', 'Good','Critical']},
    
});

const Patients = mongoose.model('Patients', PatientsSchema);

module.exports = Patients;