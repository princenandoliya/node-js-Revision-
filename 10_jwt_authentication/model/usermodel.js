import mongoose, { model, Types } from "mongoose";

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
        required:true,
        validate: (value)=>{
            if( value.toLowerCase() === "password"){
                return "password can't contain password word as password"
            }
        }
    }
})

const user = mongoose.model("user",userSchema)

export default user