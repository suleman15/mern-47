import todoModel from "../models/todo.model"

export const getTodo = async () => {
    let found = await todoModel.find()
    return found
}
// export const createTodo = async (user) => {
//     return  await todoModel.create(user)
    
// }