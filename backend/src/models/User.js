const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
   email:String,
   cash:{type:Number,default:0},
})

module.exports = mongoose.model('User',UserSchema)