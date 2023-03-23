module.exports = {
  mongoUrl:
    process.env.DB_URL ||
    "mongodb+srv://lpreng:P%40ss123!@node-nats.je1rsnn.mongodb.net/",
  port: process.env.PORT || 5500
};
