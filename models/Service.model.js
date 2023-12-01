const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  petition_reason: String,
  vin: String,
  year: Number,
  model: String,
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
