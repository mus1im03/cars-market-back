const { Router } = require("express");
const { carsController } = require("../controllers/car.controller");

const router = Router();

router.get("/cars", carsController.getCars);
router.post("/car", carsController.postCar);


module.exports = router;