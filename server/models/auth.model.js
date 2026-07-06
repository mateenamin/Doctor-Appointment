import mongoose from "mongoose";


const userScheme = new mongoose.Schema({

   name : {
    type : String,
    required : true,
   },
   email : {
    type:String,
    required : true,
    unique : true,
   },
   password : {
    type:String,
    required : true,
   },
   role: {
    type: String,
    enum: ['patient', 'doctor', 'admin'],
    default: 'patient'
}

},
{timestamps : true}
)

const User = mongoose.model('User' , userScheme)

export default User