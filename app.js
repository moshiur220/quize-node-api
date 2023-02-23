const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./db");
const quizRoutes = require("./routes/quizRoutes");
require("dotenv").config();
sequelize.sync();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

app.use("/quizzes", quizRoutes);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

// Database
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
  })
  .catch((error) => console.error(error));
