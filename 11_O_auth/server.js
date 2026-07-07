import express from "express"
import HttpError from "./middleware/HttpError.js"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
dotenv.config({path: "./.env"})


const app = express()


app.get("/",(req,res)=>{
    res.send("hello from server")
})

app.use((req,res,next)=>{
    next(new HttpError("requested routes are not found"))
})

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.StatusCode || 500).json({
        success: false,
        message: err.message
    });
});


const port = 5000

async function server() {
    try {

        const connect = await connectDB()

        if (!connect) {
            throw new error("fail to connect DB")
        }
        app.listen(port, (err) => {
            if (err) {
                return console.log(err.message)
            }

            console.log(`server runing on port ${port}`)
        })

    } catch (error) {
        console.log(error.message)
        process.exit(1)

    }

}
server()

