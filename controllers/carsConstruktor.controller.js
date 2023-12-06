const CarConstruktor = require("../models/CarConstruktor.model");

module.exports.carConstruktorController = {
  getCarsKonstruktor: async (req, res) => {
    const konstruktor = await CarConstruktor.find();

    res.json(konstruktor);
  },

  postCarKonstruktor: async (req, res) => {
    const {
      name,
      mpower,
      h_p,
      description,
      engineType,
      img,
      titleImg,
      powerReserve,
      categoryId,
      car_color_img,
      car_colors,
      car_steels,
      car_steels_img,
      car_interer,
      car_interer_img,
      car_decor,
      car_decor_img,
    } = req.body;

    try {
      const konstruktor = await CarConstruktor.create({
        name,
        description,
        engineType,
        img,
        titleImg,
        mpower,
        powerReserve,
        categoryId,
        h_p,
        car_color_img,
        car_colors,
        car_steels,
        car_steels_img,
        car_interer,
        car_interer_img,
        car_decor,
        car_decor_img,
      });
      await res.json(konstruktor);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};
