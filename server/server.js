const express = require("express");
const app = express();
const cors = require("cors");

const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use('/user', userRouter)

app.listen(port, (req, res) => {
  console.log("SERVER is listening on port 4000");
});
