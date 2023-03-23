const VehicleData = require("./vehicle-data/schema");
const initializeDb = require("./db");

initializeDb();

module.exports = {
  VehicleData
};
