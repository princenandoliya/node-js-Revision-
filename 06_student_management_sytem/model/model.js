import express from "express"
import mongoose from "mongoose"

const studentSchema =  new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true        
    },
    grid:{
        type:Number,
        required:true,
        unique:true
    },
    course:{
        type:String,
        required:true,
        enum:["full stack","video editing","desing"]
    },
    moNumber:{
        type:Number,
        required:true,
        unique:true
    }

})

const student = mongoose.model("student",studentSchema)
export default student;