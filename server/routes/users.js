const express = require("express");
const router = express.Router();
const db = require("../db-models/db-models.js");
const appControllers = require("../controller/controller.js");

router.post("/signup", appControllers.signup, (req, res) => {
  console.log("this is the message: ", res.locals.message);
  console.log("this is error:", res.locals.error);
  if (res.locals.message) {
    return res.status(200).json({ message: res.locals.message });
  }

  if (res.locals.error) {
    return res.status(400).send(res.locals.error);
  }
});

router.post("/login", appControllers.login, (req, res) => {
  if (res.locals.error) {
    res.status(400).json({ error: res.locals.error });
  }
  if (res.locals.message) {
    res.status(200).json({ message: res.locals.message });
  }
});

module.exports = router;
