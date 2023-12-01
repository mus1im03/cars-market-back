const mongoose = require('mongoose');

const carConstruktorSchema = mongoose.Schema({
    name: String,
    description: String, 
    engineType: String,
    img: [String],
    titleImg: String,
    powerReserve: String,
})

const CarConstruktor = mongoose.model("CarConstruktor", carConstruktorSchema);

module.exports = CarConstruktor;