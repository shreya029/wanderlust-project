const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


//schema by default passport-local-mongose will create the # feild and salt field to stor the username thats why only we mention email /
//it will even add some methods 
const userSchema = new Schema({
    email:{
        type:String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);