// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
// const Schema = mongoose.Schema;
const MONGODB_URI='mongodb+srv://admin:root@cluster0.uoaf66f.mongodb.net/Library?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;
