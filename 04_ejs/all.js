
import express from "express"

const all = express();

all.set("view engine","ejs")

all.use(express.urlencoded({extended: true}))

let bikelist = [
    {
        id: 1,
        name : "gt 650"
    },
    {
        id : 2,
        name : "bmw s1000rr"
    }

]

all.get("/",(req,res)=>{
    res.render("index",{bikelist})
})

const port = 5000

all.listen(port,(err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log("server runing on port",port)
    }
})