const express = require("express");
const port = 2021;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`<h1> Express JS</h1>`);
});

app.listen(port, () => console.log("Server Running on Port ", port));
