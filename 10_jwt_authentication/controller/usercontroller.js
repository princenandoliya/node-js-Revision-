import HttpError from "../middleware/HttpError.js";
import user from "../model/usermodel.js";


const add = async(req,res,next)=>{
    try {
        
        const {name,email,password} = req.body

        const newuser = new user({
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

export default {add}