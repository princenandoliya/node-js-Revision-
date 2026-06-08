import express from "express"
import dotenv from "dotenv"

import HttpError from "./middleware/HttpError.js"
import connected from "./config/db.js"
import controller from "./controller/controller.js"
import router from "./routes/routers.js"



dotenv.config({path: "./.env"})

const app = express()

app.get("/", (req, res, next) => {
    res.send("hello from server")
})

app.use("/event",router)

const port = 5000

async function server() {
    try {

        const connect = await connected()

        if (!connect) {
            throw new Error("failed to connect")
        }

        app.listen(port, (Error) => {
            if (Error) {
                console.log(Error.message)
            }

            console.log(`server running on port ${port}`)
        })

    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

server()