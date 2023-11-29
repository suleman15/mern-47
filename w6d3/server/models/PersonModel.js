import mongoose from 'mongoose'

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    city:  String
})

const PersonModel = mongoose.model("person", PersonSchema)

export default PersonModel;