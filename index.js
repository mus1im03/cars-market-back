require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

app.use(
  "/assets",
  express.static(path.resolve(__dirname, "assets")
);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(require("./routes/offer.route"))
app.use(require("./routes/cars.route"));
app.use(require("./routes/categories.route"));
app.use(require('./routes/service.route'))


const { PORT, MONGO_SERVER } = process.env;

connectAndStartServer = async () => {
  try {
    await mongoose.connect(MONGO_SERVER);
    app.listen(PORT, () => {
      console.log(`Сервер запущен: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Ошибка при подключении: ${error.toString()}`);
  }
};

connectAndStartServer();