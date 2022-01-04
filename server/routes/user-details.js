const express = require("express");
const router = express.Router();
const db = require("../db-models/db-models.js");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const q = "SELECT * FROM userDetails WHERE user_id=($1)";

  await db.query(q, [id], (err, result) => {
    if (err) {
      return res.status(400).send("Error showing user details");
    }
    return res.status(200).send("Here is the user details!");
  });
});

router.post("/:id/create", async (req, res) => {
  const id = req.params.id;
  const { height, weight, age, gluten, diet_type, allergies } = req.body;
  const q =
    "INSERT INTO userDetails (user_id, height, weight, age, gluten, diet_type, allergies) VALUES(($1), ($2), ($3), ($4), ($5), ($6), ($7))";
  await db.query(
    q,
    [id, height, weight, age, gluten, diet_type, allergies],
    (err, result) => {
      if (err) {
        return res.status(400).send("Error creating user details");
      }
      return res.status(200).send("Successfully created user details");
    }
  );
});

router.put("/:id/update", async function (req, res) {
  const id = req.params.id;
  const { age, height, weight, diet_type, allergies } = req.body;
  const q =
    "UPDATE userDetails SET age=($1), weight=($2), height=($3), diet_type=($4), allergies=($5) WHERE user_id=($6)";
  await db.query(
    q,
    [age, weight, height, diet_type, allergies, id],
    (err, result) => {
      if (err) {
        return res.status(400).send("Error updating user details");
      }
      return res.status(200).send("Successfully updated user details");
    }
  );
});

module.exports = router;
