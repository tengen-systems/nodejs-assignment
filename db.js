const mongoose = require("mongoose");
const { mongoUrl } = require("./config");

function initializeDb() {
  return Promise.resolve(mongoose.connect(mongoUrl))
    .then(() => console.log("DB connected"))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = initializeDb;
