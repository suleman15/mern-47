import express from "express"
import { GetTodo } from "../controllers/todo.controller"
let router = express.Router()

router.get("/", GetTodo)

export default router;