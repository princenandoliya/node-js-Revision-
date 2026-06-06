import HttpError from "../middleware/studentMd.js"
import employe from "../model/model.js"




// const add = async (req,res,next)=>{

//     try {
//         const {name,emp_id,email,department,salary,moNumber} = req.body

//         const newemploye = await new employe({
//             name,
//             emp_id,
//             email,
//             department,
//             salary,
//             moNumber
//         })

//         await newemploye.save()

//         res.status(201).json({success:true,message:"employe data added successfully"})



//     } catch (error) {
//         next(new HttpError(error.message,500))
//     }
// }


const add = async (req,res,next)=>{

    try {
        
        const {name,emp_id,email,department,salary,moNumber} = req.body

        const newemploye = await new employe({
            name,
            emp_id,
            email,
            department,
            salary,
            moNumber
        })

        await newemploye.save()

        res.status(201).json({success:true,message:"employe added success fully"})

    } catch (error) {
        next(new HttpError(error.message,500))
    }
}



// const allemploye = async (req,res,next)=>{

//     try {

//         const employes = await employe.find({})

//         if(employe.length <= 0){
//             res.status(200).json({success:true,message:"no student data found"})
//         }

//         res.status(200).json({success:true,total:employes.length,message:"employe dara found successfully",data:employes})
        


//     } catch (error) {
//         next(new HttpError(error.message,500))
//     }
// }


// const allemploye = async (req,res,next)=>{

//     try {
        
//         const employes = await employe.find({})

//         if(employe.length <= 0){
//             res.status(200).json({success:true,message:"no employe data found"})
//         }

//         res.status(200).json({success:true,total:employes.length,message:"employe found successfully",data:employes})


//     } catch (error) {
//         next(new HttpError(error.message,500))
//     }
// }

const allemploye = async (req,res,next)=>{

    try {


        const employes = await employe.find({})

        if(employe.length <= 0){
            res.status(200).json({success:true,message:"no employe data found"})
        }
        res.status(200).json({success:true,total:employes.length,message:"employe data feach successfull",data:employes})
        
    } catch (error) {
        next(new HttpError(error.message,500))
    }
}

const deleteemploye = async (req,res,next)=>{
    try {
        
        const id = req.params.id
        const employes = await employe.findByIdAndDelete(id)

        if(!employes){
            res.status(404).json({success:false,message:"no employe found with this id"})
        }

        res.status(200).json({success:true,message:"student delete successfully"})


    } catch (error) {
        next(new HttpError(error.message,500))
    }
}


export default {add,allemploye,deleteemploye}