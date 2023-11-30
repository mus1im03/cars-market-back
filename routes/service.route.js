const { Router } = require("express");

const { serviceController } = require("../controllers/service.controller");

const router = Router();

router.get("/service", serviceController.getService);
router.post("/service", serviceController.addService);

module.exports = router;
