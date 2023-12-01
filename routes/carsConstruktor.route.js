const { Router } = require("express");

const { carConstruktorController } = require("../controllers/carsConstruktor.controller")

const router = Router();

router.get("/konstruktor", carConstruktorController.getCarsKonstruktor)
router.post("/konstruktor", carConstruktorController.postCarKonstruktor)

module.exports = router;