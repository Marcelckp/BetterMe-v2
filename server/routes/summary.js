const express = require("express");
const router = express.Router();
const db = require("../db-models/db-models.js");

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const q = "SELECT * from favorites WHERE user_id=($1)";
  await db.query(q, [id], (err, result) => {
    if (err) {
      return res.status(404).send("Error retrieving favorites from database");
    }

    res.status(200).send(result.rows);
  });
});

router.post("/:id/create", async (req, res) => {
  const id = req.params.id;
  const { weekday, breakfast, lunch, dinner } = req.body;
  const q =
    "INSERT INTO summary (user_id,weekday, breakfast, lunch, dinner) VALUES ($1,$2,$3,$4,$5) ";

  await db.query(q, [id, weekday, breakfast, lunch, dinner], (err, result) => {
    if (err) {
      return res.status(400).send("Error adding to summary");
    }
    return res.status(200).send("Successfully added meal(s) to summary");
  });
});

module.exports = router;
