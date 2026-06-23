import HttpError from "../middleware/HttpError.js";
import users from "../model/usermodel.js";


const add = async(req,res,next)=>{
    try {
        
        const {name,email,password} = req.body

        const newuser = new users({
            name,
            email,
            password
        })

        await newuser.save()

        res.status(201).json({success:true,message:"new user add successfully",newuser})

    } catch (error) {
        next(new HttpError(error.message))
    }
}

const getall = async(req,res,next)=>{

    try {
        
        const users = await users.find({})

        if(!users){
            res.status(404).json({success:false,message:"no user data found"})
        }

        res.status(200).json({success:true,total:users.length,message:"user found",users})

    } catch (error) {
        next(new HttpError(error.message))
        
    }
}


const login = async(req,res,next)=>{
    try {
        
        const {email,password} = req.body

        const user = await users.findbycredentials(email,password)

        if(!user){
            next(new HttpError("unable to login"))
        }

        res.status(200).json({success:true,user})



    } catch (error) {
        console.log("LOGIN ERROR:", error);
    console.log("MESSAGE:", error.message);


        next (new HttpError(Error.message))
    }
}
export default {add,getall,login}