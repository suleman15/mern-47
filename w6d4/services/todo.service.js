import todoModel from "../models/todo.model"

export const getTodo = async () => {
    return  await todoModel.find()
    
}
// export const createTodo = async (user) => {
//     return  await todoModel.create(user)
    
// }