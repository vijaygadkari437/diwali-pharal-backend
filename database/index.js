const mongoose = require("mongoose");

const { MONGOURI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGOURI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};