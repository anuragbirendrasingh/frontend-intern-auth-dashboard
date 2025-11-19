const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => {
//     console.log("DB IS Connected");
//   })
//   .catch((err) => {
//     console.log("DataBAse Error", err);
//   });

async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is throwing error ", error);
  }
}

dbConnect();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
