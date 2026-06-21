import mongoose  from "mongoose";
import bcrypt from "bcryptjs"

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



userSchema.pre("save",async function(){
    const user = this
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,10)
    }
})

userSchema.statics.findbycredentials = async function(email,password){

    try {
        const user = await findOne({email})
    if(!user){
        throw new Error("unable to login")
    }

    const isMatched = await bcrypt.compare(password,user.password)
    if(!isMatched){
        throw new Error("unable to login")
    }
        
    } catch (error) {
        throw new error(error.message)
        
    }

    return user

}




const user = mongoose.model("user",userSchema)

export default user