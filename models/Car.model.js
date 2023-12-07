const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  cars_info: {
    image: [String],
    name: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: String, required: true },
    mileage: { type: String, required: true },
    owners: { type: Number, required: true },
    transmission: { type: String, required: true },
    drive_unit: { type: String, required: true },
    color: { type: String, required: true },
    interior_color: { type: String, required: true },
  },
  engine: {
    working_volume: { type: Number, required: true },
    maximum_torque: { type: String, required: true },
    maximum_power: { type: String, required: true },
    number_of_cylinders: { type: String, required: true },
  },

  driving_performance: {
    maximum_speed: { type: Number, required: true },
    acceleration_time: { type: Number, required: true },
  },

  fuel_consuption: {
    combined_cycle: { type: Number, required: true },
    extra_urban_cycle: { type: Number, required: true },
    urban_cycle: { type: Number, required: true },
    co2_emissions: { type: Number, required: true },
  },

  dimensions: {
    length_mm: { type: Number, required: true },
    height_mm: { type: Number, required: true },
    width_mm: { type: Number, required: true },
    ground_clearance: { type: Number, required: true },
  },

  weight: {
    unladen_weight: { type: Number, required: true },
    permissible_total: { type: Number, required: true },
  },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
