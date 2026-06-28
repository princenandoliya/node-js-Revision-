import usercontroller from "../controller/usercontroller.js";
import express from "express"

const router = express.Router()

router.post("/add",usercontroller.add)

router.get("/all",usercontroller.getall)

router.post("/login",usercontroller.login)

export default router
