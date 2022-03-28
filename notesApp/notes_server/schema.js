import mongoose from "mongoose";

const notes = mongoose.Schema({
  id: Number,
  text: String,
  date: String,
});

export default mongoose.model("note", notes);
