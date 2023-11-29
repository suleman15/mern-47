import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema({
    name: String,
    minAge: Number, 
    maxAge: Number,
    category: String
})

 const MoviesModel = mongoose.model("movieList", MovieSchema)


 export default MoviesModel;