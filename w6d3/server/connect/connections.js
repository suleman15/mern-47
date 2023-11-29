export default mongoConnect = async () => {
    await mongoose.connect('mongodb+srv://sulemanahmed27048:neon123@cluster0.otnrxs3.mongodb.net/movies')
}