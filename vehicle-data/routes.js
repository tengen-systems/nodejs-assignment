const express = require("express");
const { findVehicleData, findVehicleDataById } = require("./operations/find");

const router = express.Router();

router.get("/", (_req, res, next) => {
  return findVehicleData()
    .then((vehicleData) => res.json(vehicleData))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  return findVehicleDataById(id)
    .then((vehicleData) => res.json(vehicleData))
    .catch(next);
});

module.exports = router;
