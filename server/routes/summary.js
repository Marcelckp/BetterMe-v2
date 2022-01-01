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

module.exports = router;
