const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {

});



const collectionsh = new mongoose.Schema({
  ubicacion: String,
  calidadaire: Number,
  humedad:Number,
  temperatura: Number,
  lluvia: String,
  fecha:{
    type: Date,
    default: Date.now 
  }
}, { versionKey: false });

module.exports = {
  coleccionmodelo: mongoose.model("Mediciones", collectionsh)
};
