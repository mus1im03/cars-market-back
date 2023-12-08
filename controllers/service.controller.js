const Mail = require("../mail");
const Service = require("../models/Service.model");

module.exports.serviceController = {
  getService: async (req, res) => {
    const service = await Service.find();
    res.json(service);
  },
  addService: async (req, res) => {
    const { petition_reason, name, phone, vin, year, model } = req.body;

    try {
      const service = await Service.create({
        petition_reason,
        name,
        phone,
        vin,
        year,
        model,
      });

      await Mail.send({petition_reason, name, phone, vin, year, model})
      
      await res.json(service);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};
