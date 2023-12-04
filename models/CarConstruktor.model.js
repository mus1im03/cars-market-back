const mongoose = require('mongoose');

const carConstruktorSchema = mongoose.Schema({
    name: String,
    description: String, 
    engineType: String,
    img: [String],
    titleImg: String,
    powerReserve: String,
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
      }
})

const CarConstruktor = mongoose.model("CarConstruktor", carConstruktorSchema);

module.exports = CarConstruktor;