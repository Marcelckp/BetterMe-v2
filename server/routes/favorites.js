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
  //WAITING FOR FOOD ID?????????
  const { id } = req.params;
  const { food_id } = req.body;
  
  const q1 = "SELECT * from favorites where user_id=($1) and food_id=($2)"

  await db.query(q1, [id, food_id], (err, result) => {
    console.log(result, err)
    if (err) {
      return res.status(400).send("Error creating favorites");
    } else if (result.rows.length > 0) {
      res.json({message : "You've already added this recipe to your favorites!"})
      console.log('oopsie');
      return;
    } else if (result.rows.length === 0) {

      const q = "INSERT INTO favorites (user_id, food_id) VALUES ($1,$2)";
      //WAITING FOR FOOD ID?????????
      db.query(q, [id, food_id], (err, result) => {
        
        if (err) {
          return res.status(400).send("Error creating favorites");
        }
    
        return res.status(200).send("Successfully added");
      });

    }
  });

});

router.delete("/:id/delete", async (req, res) => {
  //WAITING FOR FOOD ID?????????
  const { id } = req.params;
  const { food_id } = req.body;

  const q = "DELETE FROM favorites (user_id, food_id) VALUES ($1,$2)";
  //WAITING FOR FOOD ID?????????
  await db.query(q, [id, food_id], (err, result) => {
    if (err) {
      return res.status(400).send("Error creating favorites");
    }

    return res.status(200).send("Successfully deleted");
  });
});

module.exports = router;
