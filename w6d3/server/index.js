import express from 'express';
import mongoose from 'mongoose';
import PersonModel from './models/PersonModel.js';
import MoviesModel from './models/MoviesModel.js';
const PORT = 8800

const [app, router] = [express(), express.Router()]

app.use(express.json())







const mongoConnect = async () => {
     await mongoose.connect('mongodb+srv://sulemanahmed27048:neon123@cluster0.otnrxs3.mongodb.net/movies')
}
mongoConnect().then(() => console.log('Connected to datebase')).catch(err => console.log(err.message))


router.get('/', (req,res) => res.status(200).json({success: true}))

// Movies Routes
router.get('/movie', async(req, res) => {
    let moviesList = await MoviesModel.find();
    res.status(200).json(moviesList)
})
router.post('/movie', async(req, res) => {
    let {name, minAge, maxAge, category} = req.body;
    let moviesList = await MoviesModel.create({name, minAge, maxAge, category});
    
    res.status(200).json(moviesList)
})
router.patch('/movie', async(req, res) => {
    let {id, updatedMovies} = req.body;
    let moviesKey = Object.keys(updatedMovies)
    let obj = {}
    for(let key of moviesKey) {
        obj[key] = updatedMovies[key]
    }    
    let moviesList = await MoviesModel.findByIdAndUpdate(id, obj);
    console.log(moviesList);
    res.status(200).json(moviesList)
})
router.delete('/movie', async(req, res) => {
    let {id} = req.body;
    let moviesList = await MoviesModel.findByIdAndDelete(id);
    res.status(200).json(moviesList)
})




//Person Routes

router.get('/person', async(req, res) => {
    let personList = await PersonModel.find();
    res.status(200).json(personList)
})
router.post('/person', async(req, res) => {
    let {name, age, city} = req.body;
    let personList = await MoviesModel.insertOne({name, age, city});
    res.status(200).json(personList)
})
router.patch('/person', async(req, res) => {
    let {id, updatedMovies: updatedPerson} = req.body;
    let personKey = Object.keys(updatedPerson)
    let obj = {}
    for(let key of personKey) {
        obj[key] = updatedPerson[key]
    }    
    let personList = await MoviesModel.findByIdAndUpdate(id, obj);
    console.log(personList);
    res.status(200).json(personList)
})
router.delete('/person', async(req, res) => {
    let {id} = req.body;
    let personList = await MoviesModel.findByIdAndDelete(id);
    res.status(200).json(personList)
})

app.use(router)

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}`)
})