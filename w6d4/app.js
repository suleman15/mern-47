import express from 'express'
import connectDatabase from './dbConnect/connect.js';
import router from './routes/todo.route.js';

let app = express();
let PORT = 3500;

connectDatabase();

app.use('/todo', router)


app.listen(PORT || 3000 , () => {
    console.log("server is started")
})