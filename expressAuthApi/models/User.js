import mongoose from 'mongoose'

//Defining schema
const userSchema=mongoose.Schema({
    name:{type:String, required:true,trim:true},
    email:{type:String, required:true,trim:true},
    password:{type:String, required:true,trim:true},
    tc:{type:Boolean, required:true},

})

//Defining Model
const userModel=mongoose.model("user",userSchema) //first argument takes the name of the collection in db


export default userModel