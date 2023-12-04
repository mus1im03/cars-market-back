const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategories: async (req, res) => {
    const category = await Category.find();

    res.json(category);
  },

  postCategory: async (req, res) => {
    const { title } = req.body;

    try {
      const category = await Category.create({
        title,
      });
      await res.json(category);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};
