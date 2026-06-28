import express from "express"
import HttpError from "./middleware/HttpError.js"
import connectDb from "./config/db.js"
import router from "./routes/userRouter.js"
import dotenv from "dotenv"

dotenv.config({path: "./.env"})


const app = express()

app.use(express.json())

app.use("/user",router)


app.get("/", (req, res) => {
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

        const connect = await connectDb()
        if (!connect) {
            throw new Error("fail to connect")
        }

        app.listen(port, (err) => {
            if (err) {
                return console.log(err.message)
            }

            console.log(`server runing no port${port}`)
        })


    } catch (error) {
        console.log(error.mesaage)
        process.exit(1)

    }

}
server()