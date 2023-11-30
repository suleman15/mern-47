import mongoose from 'mongoose'

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    city:  String,
    role: {type: String, enum: ["ADMIN", "USER"], default: "USER" },
    balance: {type: Number, default: 0},
    password: {type: String, minlength: [5, "Password Can,t be less than 5 "], select: false}
})

const PersonModel = mongoose.model("person", PersonSchema)

export default PersonModel;