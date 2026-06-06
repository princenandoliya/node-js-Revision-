import mongoose from "mongoose"

const employeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    emp_id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    department: {
        type: String,
        required: true,
        enum: ["HR", "IT", "finance", "security"],
    },
    salary:{
        type:String,
        required:true
    },
    moNumber: {
        type: Number,
        required: true,
        unique: true
    }
})


const employe = mongoose.model("employe",employeSchema)

export default employe;