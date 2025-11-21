const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/apiRouter");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", apiRouter);

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
