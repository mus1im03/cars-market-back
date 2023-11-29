const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  cars_info: {
    image: [String],
    name: String,
    year: Number,
    price: String,
    mileage: Number,
    owner: Number,
    
    transmission: String,
    drive_unit: Number,
  },
  engine: {
    working_volume: Number,
    maximum_torque: Number,
    maximum_power: Number,
    number_of_cylinders: Number,
  },

  driving_performance: {
    maximum_speed: Number,
    acceleration_time: Number,
  },

  fuel_consuption: {
    combined_cycle: Number,
    extra_urban_cycle: Number,
    urban_cycle: Number,
    co2_emissions: Number,
  },

  dimensions: {
    length_mm: Number,
    height_mm: Number,
    width_mm: Number,
    ground_clearance: Number,
  },

  weight: {
    unladen_weight: Number,
    permissible_total: Number,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
