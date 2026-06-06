
import express from "express"

const all = express();

all.get("/",(req,res)=>{
    res.json("this is home page")    
})

all.get("/about",(req,res)=>{
    res.json("this is about page")
})

const port = 5001

all.listen(port,(err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log("server runing on port",port)
    }
})