// import mongoose from "mongoose";


// async function connected(){
//     try {

//         const connect = await mongoose.connect(
//             "mongodb://localhost:27017/employesystem"
//         )
//         console.log("db connect")
//         return connect
//     } catch (err) {
//         console.log(err.message)
        
//     }
    
// }

// export default connected

// import mongoose from "mongoose";

// async function name(){

//     try {
        
//         const connect = await mongoose.connect(
//             "mongodb://localhost:27017/employe"
//         )
//         console.log("db connected")
//         return connect


//     } catch (err) {
//         console.log(err.message)
        
//     }
// }

// export default name

import mongoose from "mongoose";

async function all(){
    try {
        
        const connect = await mongoose.connect(
            "mongodb://127.0.0.1:27017/employe"
        )
        console.log("db connect")
        return connect

    } catch (error) {
        console.log(error.message)
        
    }


}

export default all