const mongoose = require("mongoose");

const offerSchema = mongoose.Schema({
    name: String,
    surname : String,
    phone: String
})

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;