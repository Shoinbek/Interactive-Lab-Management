const mongoose = require('mongoose');

const {Schema} = mongoose;

const birdSchema = new Schema ({
    creatorId: {type:String, required: true},
    creatorName: {type:String, required: true},
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    birthDate: {type:Date, required: true},
    zipCode: {type:String, required: true},
    state: {type:String, required: true},
    phoneNumber: {type:String, required: true},
    createDate: {type:Date, required: true},
    insuranceType: {type:String, required: true},
    testType: {type:String, required: true},
    doctorService: {type:String, required: true},
    labName: {type:String, required: true},
    status: {type:String, enum: ['Good', 'Critical', 'Stable']}

}); 

// const userSchema = new Schema ({
//     firstName: {type:String, required: true},
//     lastName: {type:String, required: true},
//     email: {type:String, required: true},
//     password: {type:String, required: true},
//     role: {type:String, required: true},
    

// }); 

const Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;