const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
// const Schema = mongoose.Schema;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:root@cluster0.uoaf66f.mongodb.net/library?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;