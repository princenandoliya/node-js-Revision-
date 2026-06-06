

import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.json("hello from express revision server")
})

app.get("/home",(req,res)=>{
    req.json("this is home page")
})

const port = 5000

app.listen(port,(err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log("server runing on port",port)
    }

})