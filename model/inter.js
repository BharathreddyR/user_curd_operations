const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,    
        required:true
    }

},{timestamps:true});   

module.exports = mongoose.model('Inter', userSchema)