import express from "express"

import uploads from "../middleware/upload.js"

import controller from "../controller/controller.js";
const router = express.Router()

router.post("/add",uploads.fields([
    {
        name: "eventBanner",
        maxCount:1
    },
    {
        name:"eventPoster",
        maxCount:2
    },
    {
        name: "eventSpeaker",
        maxCount:2
    }
]),
controller.addEvent,
);

router.get("/allEvent",controller.allEvent)

router.get("/:id",controller.getEvent)

router.delete("/:id",controller.deleteEvent)

router.patch("/:id",uploads.fields([
    {
        name: "eventBanner",
        maxCount:1
    },
    {
        name:"eventPoster",
        maxCount:2  
    },
    
]),
controller.updateEvent
)

export default router