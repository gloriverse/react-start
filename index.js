const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://gloriverse:112112@react-starter.mzqiz.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000);
