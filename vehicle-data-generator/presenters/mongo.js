const { Transform } = require("stream");

module.exports = function (model) {
  return new Transform({
    objectMode: true,
    transform: async function (doc, enc, cb) {
      await model.create(doc);
      cb(null, doc);
    }
  });
};
