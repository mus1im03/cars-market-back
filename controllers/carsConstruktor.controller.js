const CarConstruktor = require("../models/CarConstruktor.model");

module.exports.carConstruktorController = {
  getCarsKonstruktor: async (req, res) => {
    const konstruktor = await CarConstruktor.find();

    res.json(konstruktor);
  },

  postCarKonstruktor: async (req, res) => {
    const { name, description, engineType, img, titleImg, powerReserve } =
      req.body;

    try {
      const konstruktor = await CarConstruktor.create({
        name,
        description,
        engineType,
        img,
        titleImg,
        powerReserve,
      });
      await res.json(konstruktor);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};
