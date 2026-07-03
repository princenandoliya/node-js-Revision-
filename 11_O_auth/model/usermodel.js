import mongoose, { Types } from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{

        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})


const user = mongoose.model("user",userSchema)

export default user