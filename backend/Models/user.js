const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    companyName:{type:String,required:true},
    ownerName:{type:String,required:true},
    rollNo:{type:String,required:true},
    ownerEmail:{type:String,required:true},
    accessCode:{type:String,required:true},
})
module.exports = new mongoose.model('user',userSchema)