import express from 'express'
import connectDatabase from './dbConnect/connect.js';

let app = express();
let PORT = 3500;

connectDatabase();




app.listen(PORT || 3000 , () => {
    console.log("server is started")
})