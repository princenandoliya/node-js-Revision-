import express from "express"
import mongoose from "mongoose"
import HttpError from "./middleware/HttpError.js"
import connectDB from "./config/db.js"
import router from "./routes/userRoutes.js"
import dotenv from "dotenv"

dotenv.config({ path: "./.env" })

const app = express()

app.use(express.json())

app.use("/user",router)
app.get("/", (req, res) => {
    res.send("hello from server")
})

const port = 5000


async function server() {

    try {


        const connect = await connectDB()

        if (!connect) {
            return console.log("fail to connect")
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