const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/apiRouter");

app.use(express.json()) ;
app.use(cookieParser())
app.use('/api',apiRouter);


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
