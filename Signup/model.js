const mongoose = require ('mongoose');
const SignSchema = mongoose.Schema
(
    {
     name:{
        type: String,
         required: true
     },
     email:{
        type: String,
        required: true
     },
     password:{
        type: String,
        required: true
     }

    } 
        )
        const Sign = mongoose.model("Sign",SignSchema);
        module.exports = Sign;