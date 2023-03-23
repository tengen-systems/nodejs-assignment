const { Writable } = require("stream");

module.exports = function (nats, vehicleName, i) {
  return new Writable({
    objectMode: true,
    write(obj, enc, cb) {
      // setTimeout in this case is there to emulate real life situation
      // data that came out of the vehicle came in with irregular interval
      // Hence the Math.random() on the second parameter
      setTimeout(() => {
        i++;
        if (i % 100 === 0)
          console.log(`vehicle ${vehicleName} sent have sent ${i} messages`);

        // The first parameter on this function is topics in which data will be broadcast
        // it also includes the vehicle name to segregate data between different vehicle

        nats.publish(`vehicle.${vehicleName}`, obj, cb);
      }, Math.ceil(Math.random() * 150));
    }
  });
};
