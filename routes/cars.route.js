const { Router } = require("express");
const {carscontroller} = require("../controllers/car.controller")
 
const router = Router();

router.get('/cars', carscontroller.getCars)
router.post('/car', carscontroller.postCar)

module.exports = router