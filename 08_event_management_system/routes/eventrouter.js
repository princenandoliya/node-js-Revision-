import express from "express"

import controller from "../controller/controller.js"

import upload from "../middleware/uploads.js"
import uploads from "../middleware/uploads.js"

const router = express.Router()

router.post("/add",uploads.fields([
    {
        name:"eventPoster",
        maxCount:5
    },
    {
        name:"eventBanner",
        maxCount:1
    },
    {
        name:"eventSpeaker",
        maxCount:3
    }
]),
controller.add
);


router.get("/allevent",controller.allevent)

export default router

