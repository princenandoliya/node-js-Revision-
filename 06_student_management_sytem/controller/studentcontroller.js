import HttpError from "../../07_employe_system/middleware/studentMd.js";
import student from "../model/model.js";



const add = async(req,res,next)=>{

    try {

        const {name,email,grid,course,moNumber} = req.body

        const newstudent = await new student({
            name,
            email,
            grid,
            course,
            moNumber
        }) 

        await newstudent.save()

        res.status(200).json({success:true,message:"student added successfully"})
    } catch (error) {
        next(new HttpError(error.message,500))
    }
}


const allstudent = async(req,res,next)=>{

    try {
        
        const students = await student.find({})

        if(student.length <= 0){
            res.status(200).json({success:true,message:"no student found"})
        }

        res.status(200).json({success:true,total:students.length,message:"student found successfully",data:students})


    } catch (error) {
        next (new HttpError(error.message,500))
    }
}

export default {add,allstudent}