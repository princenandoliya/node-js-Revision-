

const fs = require('fs')
fs.writeFileSync("all.txt","hi i am developer")

let fun = fs.readFileSync("all.txt","utf-8")
console.log("fun:",fun)
