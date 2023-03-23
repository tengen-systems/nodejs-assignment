const mongoose = require("mongoose");

const VehicleDataSchema = new mongoose.Schema({
  time: { type: Number },
  energy: { type: Number },
  gps: { type: String },
  odo: { type: Number },
  speed: { type: Number },
  soc: { type: Number }
});

module.exports = mongoose.model("VehicleDataSchema", VehicleDataSchema);
