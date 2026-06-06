import multer from "multer"

import fs from "fs"

import HttpError from "./HttpError.js"


const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        let foldername = "uploads/";

        if (file.fieldname === "eventPoster") {
            foldername += "eventPoster"
        } else if (file.fieldname === "eventBanner") {
            foldername += "eventBanner"
        } else if (file.fieldname === "eventSpeaker") {
            foldername += "eventSpeaker"
        } else {
            foldername = "other"
        }
        fs.mkdirSync(foldername,{
            recursive:true
        })
        cb(null,foldername)
    },
    filename:(req,file,cb)=>{
        const uniquename = `${Date.now()} - ${file.originalname} - ${file.fieldname}`

        cb(null,uniquename)

    }
})

const fileFilter = (req,file,cb)=>{
    const allowfiletype = [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/pdf"
    ]

    if(!allowfiletype.includes(file.mimetype)){
        return cb(new HttpError("invaild file type",404),false)
    }
    cb(null,true)
}


const uploads = multer({
    storage,
    fileFilter,
    limits:{fileSize : 20 * 1024 * 1024}
})

export default uploads