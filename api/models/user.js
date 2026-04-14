const mongoose=require("mongoose");

const schema = mongoose.Schema;
const userSchema = new schema({
name:String,
email:{type:String},
age:Number,
isAdmin:{type:Boolean, default:false}


});

const User = mongoose.model('User', userSchema);
// ready to go!


module.exports=User
