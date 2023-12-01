import { getTodo } from "../services/todo.service.js"

export const GetTodo = async (res, req, next) => {
    let todo = await getTodo()
    res.json(todo)
}