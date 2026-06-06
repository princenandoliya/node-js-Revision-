
import http from "http"

const server = http.createServer((req,res)=>{
    res.write("hi this is my node server")
    res.end()
})

const port = 5000


server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server runing on port",port)
    }
})
