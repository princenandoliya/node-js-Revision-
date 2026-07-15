import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unqiue:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["customer","provider","admin"],
        default:"customer"
    },
    address:{
        type:String,
        required:true
    },
    MoNumber:{
        type:Number,
        required:true
    }
},{timestamps:true})


const user = mongoose.model("model",userSchema)

export default user