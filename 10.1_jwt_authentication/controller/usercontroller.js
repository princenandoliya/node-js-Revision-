import user from "../model/usermodel.js"
import HttpError from "../middleware/HttpError.js"


const add = async(req,res,next)=> {
    try {
        console.log(req.body);
        const{name,email,password} = req.body

        const newuser = new user({
            name,
            email,
            password
        })

        await newuser.save()

        res.status(201).json({success:true,message:"new user add successfully",newuser})


    } catch (error) {
        next (new HttpError(error.message,500))
        
    }
    
}

const getall = async(req,res,next)=>{
    try {
        
        const users = await user.find({})

        if(!users){
            res.status(404).json({success:false,message:"no user  data found"})
        }

        res.status(200).json({success:true,total:users.length,message:"user found",users})


    } catch (error) {
        next(new HttpError(error.message,500))
    }
}

export default {add,getall}