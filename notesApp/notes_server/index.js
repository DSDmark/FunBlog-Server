import mongoose from "mongoose";
import express from "express";
const app = express();
const port = process.env.PORT || 5000;
// import Cors from "cors";
import note from "./schema.js";

//? MIDDENLWAYS
// app.use(Cors());

//! DS CONFIGERATIONS
const connection = "mongodb://localhost:27017";
mongoose.connect(
  connection,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async (error) => {
    try {
      console.log("connetion...");
    } catch {
      console.log(error);
    }
  }
);

app.get("/", (req, res) => {
  note.find(async (err, data) => {
    try {
      res.status(200).send(data);
    } catch {
      console.log(err);
    }
  });
});

app.post("/", (req, res) => {
  const reqData = req.body;
  console.log(reqData);
  // note.create(reqData, async (err, data) => {
  //   try {
  //     res.send(data);
  //   } catch {
  //     res.send(err);
  //   }
  // });
});

app.listen(port, (error) => {
  console.log(`port running on ${port}`);
});
