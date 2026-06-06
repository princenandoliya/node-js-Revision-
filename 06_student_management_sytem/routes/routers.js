import express from "express"
import studentcontroller from "../controller/studentcontroller.js"
import student from "../model/model.js"


const router = express.Router()

router.post("/add",studentcontroller.add)

router.get("/allstudent",studentcontroller.allstudent)

export default router