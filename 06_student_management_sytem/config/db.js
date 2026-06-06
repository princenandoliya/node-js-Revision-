import mongoose from "mongoose"
async function all() {

    try {
        
        const connect = await mongoose.connect(

            "mongodb://127.0.0.1:27017/student"
        )

        console.log("db connected")
        return all


    } catch (error) {
        console.log(error.message)
        
    }
    
}

export default all