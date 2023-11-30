const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategories: async (req, res) => {
    const category = await Category.find();

    res.json(category);
  },

  postCategory: async (req, res) => {
    const { name, img, description, price, engineType } = req.body;

    try {
      const category = await Category.create({
        name,
        img,
        description,
        price,
        engineType,
      });
      await res.json(category);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};
