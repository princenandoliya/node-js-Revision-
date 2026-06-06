import mongoose from "mongoose"

async function connected(){

    try {
        
        const connect = await mongoose.connect(
            process.env.MONGO_URI
        )
        console.log("db connected")
        return connect

    } catch (error) {
        console.log(error.message)
    }
}

export default connected