import usercontroller from "../controller/usercontroller.js";
import express from "express"

const router = express.Router()

router.post("/add",usercontroller.add)

export default router