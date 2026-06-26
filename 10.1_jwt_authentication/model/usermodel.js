import mongoose from "mongoose";
import bcrypt from "bcrypt"


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

    }
})



userSchema.pre("save",async function () {

    const user = this

    if(user.isModified("password")){
        user.password = bcrypt.hash(user.password,10)
    }
    
})


userSchema.statics.findByCredentials = async function(email,password) {
    try {
        

        const user = await this.findOne({email})
        if(!user){
            throw new error("unable to login")
        }

        const isMacthed = await bcrypt.compare(password,user.password)
        if(!isMacthed){
            throw new error("unable to login")
        }

        return user

    } catch (error) {
        throw new error(error.message)
    }
    
}

const user = mongoose.model("user",userSchema)

export default user