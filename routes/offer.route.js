const { Router } = require("express");
const { offersController } = require("../controllers/offer.controller")
 
const router = Router();

router.get('/user', offersController.getOffers)
router.post('/register', offersController.postOffer)

module.exports = router;