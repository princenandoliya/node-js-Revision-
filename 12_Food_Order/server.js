import express from "express"
import HttpError from "./middleware/HttpError.js"
import connectDB from "./config/db.js"
import dotenv from "dotenv"

const app = express()

dotenv.config({path:"./.env"})
app.use(express.json())

app.get("/", (req, res) => {
    res.json("hello from server")
})

app.use((req, res, next) => {
    next(new HttpError("requested routes are not found"))
})

app.use((Error, req, res, next) => {
    if (res.headersSent) {
        return next(Error)
    }

    res.status(Error.StatusCode || 500).
        json({ message: Error.message || "internal server error" })
})

const port = 5000




async function server() {
    try {

        const connect = await connectDB()

        if (!connect) {
            throw new error("fail to connectDB")
        }

        app.listen(port, (err) => {
            if (err) {
                return console.log(err.message)
            }

            console.log(`server runing on port ${port}`)
        })


    } catch (error) {
        throw new Error(error.message)

    }

}


server()