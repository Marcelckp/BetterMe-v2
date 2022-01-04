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
  const { favoriteFood, nonFavoriteFood } = req.body;
  const q =
    "INSERT INTO preferences (user_id, favoriteFood, nonFavoriteFood) VALUES(($1), ($2), ($3))";
  await db.query(q, [id, favoriteFood, nonFavoriteFood], (err, result) => {
    if (err) {
      return res.status(400).send("Error creating preferences");
    }
    return res.status(200).send("Successfully created preferences");
  });
});

router.put("/:id/update", async (req, res) => {
  const { id } = req.params;
  const { favoriteFood, nonFavoriteFood } = req.body;

  const q =
    "UPDATE preferences SET favoriteFood =($1),nonFavoriteFood=($2) WHERE user_id=($3)";
  await db.query(q, [favoriteFood, nonFavoriteFood, id], (err, result) => {
    if (err) {
      return res.status(400).send("Error updating userPreferences");
    }
    if (result) {
      return res.status(200).send("User Preferences updated successfully");
    }
  });
});

router.delete("/:id/delete", async (req, res) => {
  //
  const id = req.params.id;
  const q = "DELETE FROM preferences WHERE user_id=($1)";
  await db.query(q, [id], (err, result) => {
    if (err) {
      return res.status(400).send("Error deleting row");
    }
  });
  return res.status(200).send("Row successfully deleted");
});

module.exports = router;
