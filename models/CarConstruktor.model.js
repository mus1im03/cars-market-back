const mongoose = require('mongoose');

const carConstruktorSchema = mongoose.Schema({
    name: String,
    description: String, 
    engineType: String,
    img: String,
    titleImg: String,
    powerReserve: String,
    h_p: String,
    car_color_img: [String],
    car_colors: [String],
    car_steels: [String],
    car_steels_img: [String],
    car_interer: [String],
    car_interer_img: [String],
    car_decor: [String],
    car_decor_img: [String],
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
    }
})

const CarConstruktor = mongoose.model("CarConstruktor", carConstruktorSchema);

module.exports = CarConstruktor;