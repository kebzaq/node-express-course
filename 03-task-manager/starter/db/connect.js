const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // .then(() => console.log("CONNECTED TO THE DB..."))
  // .catch((err) => console.log("DB CONNECTION ERROR:", err));
};

module.exports = connectDB;
