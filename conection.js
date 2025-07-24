const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {

});



const collectionsh = new mongoose.Schema({
  temperatura: Number,
  humedad: Number,
}, { versionKey: false }); 

module.exports = {
  coleccionmodelo: mongoose.model("dhts", collectionsh)
};
