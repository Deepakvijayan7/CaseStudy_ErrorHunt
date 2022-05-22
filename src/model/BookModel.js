const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:root@cluster0.uoaf66f.mongodb.net/library?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;