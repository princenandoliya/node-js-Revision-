import express from "express"
import employeController from "../controller/employeController.js"

const router = express.Router()

router.post("/add",employeController.add)

router.get("/allepmloye",employeController.allemploye)

router.delete("/delete/:id",employeController.deleteemploye)

export default router;