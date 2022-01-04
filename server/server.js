const express = require("express");
const app = express();
const cors = require("cors");
const appControllers = require("./controller/controller.js");
const port = 4000;
const db = require("./db-models/db-models");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());

const usersRouter = require("./routes/users.js");
const favoritesRouter = require("./routes/favorites.js");
const preferencesRouter = require("./routes/preferences.js");
const summaryRouter = require("./routes/summary.js");
const userDetailsRouter = require("./routes/user-details.js");

//user/signup
//user/login
app.use("/users", usersRouter);
app.use("/favorites", favoritesRouter);
app.use("/preferences", preferencesRouter);
app.use("/summary", summaryRouter);
app.use("/userDetails",userDetailsRouter)

//favorites

//preferences/4/create

app.get("/", function (req, res, next) {
  // res.cookie('rememberMe', 'yes', { httpOnly: false})
  res.status(200).send("welcome to server");
});

app.get("*", function (req, res, next) {
  res.status(301).redirect("/not-found");
});

app.use((error, req, res, next) => {
  return res.status(500).json({ error: error });
});

app.listen(port, (req, res) => {
  console.log("SERVER is listening on port 4000");
});
