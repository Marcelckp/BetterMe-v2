const express = require("express");
const router = express.Router();
const db = require("../db-models/db-models.js");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM preferences WHERE user_id=($1)";
  await db.query(q, [id], (err, result) => {
    if (err) {
      return res.status(404).send("Error retrieving preferences from database");
    }
    res.status(200).send(result.rows);
  });
});

router.post("/:id/create", async (req, res) => {
  const id = req.params.id;
  const { favoriteFood, nonFavoriteFood, gluten, diet_type, allergies } =
    req.body;
  const q =
    "INSERT INTO preferences (user_id, favoriteFood, nonFavoriteFood, gluten, diet_type, allergies) VALUES(($1), ($2), ($3), ($4), ($5), ($6))";
  await db.query(
    q,
    [id, favoriteFood, nonFavoriteFood, gluten, diet_type, allergies],
    (err, result) => {
      if (err) {
        return res.status(400).send("Error creating preferences");
      }
      return res.status(200).send("Successfully created preferences");
    }
  );
});

router.delete("/:id/delete", async (req, res) => {
  const id = req.params.id;
});

module.exports = router;
