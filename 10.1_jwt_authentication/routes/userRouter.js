import usercontroller from "../controller/usercontroller.js";
import express from "express"

const router = express.Router()

router.post("/add",usercontroller.add)

router.get("/all",usercontroller.getall)

export default router
