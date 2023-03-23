const models = require("../../models");

function findVehicleData() {
  return models.VehicleData.find().exec();
}

function findVehicleDataById(id) {
  return models.VehicleData.findById(id).exec();
}

module.exports = {
  findVehicleData,
  findVehicleDataById
};
