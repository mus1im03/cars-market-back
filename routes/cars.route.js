const { Router } = require("express");
const { carsController } = require("../controllers/cars.controller");

const router = Router();

router.get("/cars", carsController.getCars);
router.post("/car", carsController.postCar);


module.exports = router