const express = require("express");
const morganLogger = require("morgan");
const bodyParser = require("body-parser");
const router = require("./router");
const catchErrors = require("./errors");
const { port } = require("./config");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morganLogger("dev"));

app.use(router);
app.use(catchErrors);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

module.exports = app;
