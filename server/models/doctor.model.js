import mongoose from "mongoose";

const doctorScheme = new mongoose.Schema({

    name :{
        type :String,
        required : true ,
    },
    email : {
        type :String,
        required : true ,
        unique : true,
    }, 
    password :{
        type :String,
        required : true ,
    },
    specialization : {
        type : String,
        required : true ,
    },
    experience  :{
         type : Number,
        required : true ,
    },
    fee : {
        type : Number,
        required : true ,
    },
    available  :{
        type : Boolean ,
        required : true,
    }
} ,

   {  timestamps : true}
)

const Doctor = mongoose.model('Doctor' , doctorScheme)

export default Doctor