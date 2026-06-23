import jwt from "jsonwebtoken"
import user from "../model/usermodel.js"
import HttpError from "./HttpError.js"
import user from "../model/usermodel.js"
import { use } from "react"

const auth = async function (req,res,next) {
    try {
        
        const authHeader = req.authHeader("Authorization")

        if(!authHeader){
          return  next (new HttpError("authHeader is required",401))
        }

        const token = authHeader.replace("bearer ","")

        const decode = jwt.verify(token,process.env.JWT_SECRET)

        const user = await users.findOne({
            _id: decode._id,
            "tokens.token":token
        })

        if(!user){
            return next(new HttpError("authentication fail",401))
        }

        req.user = user

        req.token = token

        next()

    } catch (error) {
        next (new HttpError(error.message))
    }
    
}

export default auth