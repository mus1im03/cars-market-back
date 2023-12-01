const { Router } = require("express");

const { categoriesController } = require("../controllers/categories.controller")

const router = Router();

router.get("/categories", categoriesController.getCategories)
router.post("/category", categoriesController.postCategory)

module.exports = router;