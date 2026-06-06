import express from "express"
import HttpError from "./middleware/HttpError.js"

const app = express();

//application middleware
    app.use(express.json())
    


//Router middleware

app.get("/",(req,res)=>{
    res.send("this is a home page")
})
app.get("/about",(req,res)=>{
    res.send("this is about page")
})


//undefined middleware

app.use((req,res)=>{
    res.send("this page is not found")
})










const port = 5000

app.listen(port,(err)=>{
    if(err){
        return console.log(err)
    }
    console.log(`server runing on port ${port}`)
})
