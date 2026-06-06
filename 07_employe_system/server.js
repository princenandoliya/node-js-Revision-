import express from "express"
import HttpError from "./middleware/studentMd.js"
import all from "./config/db.js"
import router from "./routes/employeroutes.js"



const app = express()

app.use(express.json())
app.use("/employe",router)
app.get("/", (req, res) => {
    res.send("hello from server")
})


const port = 5000


async function server() {

    try {

        const connect = await all()

        if (!connect) {
            throw new Error("db not conneted")
        }


        app.listen(port, (err) => {
            if (err) {
                return console.log(err)
            }

            console.log(`server runing on port ${port}`)
        })
    } catch (err) {
        console.log(err.message)
        process.exit(1)

    }

}

server()