const Car = require("../models/Car.model");

module.exports.carsController = {
    getCars: async (req, res) => {
        const car = await Car.find();
    
        res.json(car);
      },

      postCar: async (req, res) => {
        const {
            image,
            name,
            year,
            price,
            mileage,
            owner,
            transmission,
            drive_unit,
            working_volume,
            maximum_torque,
            maximum_power,
            number_of_cylinders,
            maximum_speed,
            acceleration_time,
            combined_cycle,
            extra_urban_cycle,
            urban_cycle,
            co2_emissions,
            length_mm,
            height_mm,
            width_mm,
            ground_clearance,
            unladen_weight,
            permissible_total,
            color,
            interior_color,


        } = req.body;
    
        try {
          const car = await Car.create({
            image,
            name,
            year,
            price,
            mileage,
            owner,
            transmission,
            drive_unit,
            working_volume,
            maximum_torque,
            maximum_power,
            number_of_cylinders,
            maximum_speed,
            acceleration_time,
            combined_cycle,
            extra_urban_cycle,
            urban_cycle,
            co2_emissions,
            length_mm,
            height_mm,
            width_mm,
            ground_clearance,
            unladen_weight,
            permissible_total,
            color,
            interior_color,
          });
          await res.json(car);
        } catch (e) {
          return res.status(401).json(e.toString());
        }
      },
}