// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
// const Schema = mongoose.Schema;
const MONGODB_URI='mongodb+srv://admin:root@cluster0.uoaf66f.mongodb.net/Library?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;
