const express = require("express");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  return res.send("Holla");
});

app.get("/about", (req, res) => {
  console.log("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`server is up on ${process.env.PORT}`);
});
