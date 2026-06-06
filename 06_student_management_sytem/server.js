import express from "express"
import all from "./config/db.js"
import router from "./routes/routers.js"

const app = express()

app.use(express.json())
app.use("/student",router)

app.get("/",(req,res)=>{
    res.send("this is home page")
})

const port = 5000


async function serrver() {

    try {
        const connect = await all()

    if(!connect){
        throw new Error("db is not connected")
    }

    app.listen(port,(Error)=>{
    if(Error){
        return console.log(Error.message)
    }
    console.log(`server runing on port ${port}`)
})

    } catch (error) {
        console.log(error.message)
        
    }
    
}

serrver()