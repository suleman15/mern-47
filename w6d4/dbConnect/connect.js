import mongoose from "mongoose";
async function connectDatabase() {
        await mongoose.connect('mongodb+srv://sulemanahmed27048:neon123@cluster0.otnrxs3.mongodb.net/movies').then(() => console.log('DB has been Connected')).catch(err => console.log(err.message))
   }

export default connectDatabase;
   
    