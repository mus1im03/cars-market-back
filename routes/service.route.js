const { Router } = require("express");

const { serviceController } = require("../controllers/service.controller");
const Mail = require("../mail");

const router = Router();

router.get("/service", serviceController.getService);
router.post("/service", serviceController.addService);

router.post("/mail", async (req, res) => {
  const { email, message } = req.body;
  return res.json({ result: await Mail.send(message) });
});

module.exports = router;
