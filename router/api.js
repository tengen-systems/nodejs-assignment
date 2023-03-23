const express = require("express");
const vehicleData = require("../vehicle-data/routes");

const router = express.Router();

router.use("/vehicle-data", vehicleData);

module.exports = router;
