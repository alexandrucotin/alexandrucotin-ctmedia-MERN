const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lavoroSchema = new Schema(
  {
    title: String,
    description: String,
    img: String,
    video: String
  },
  {
    timestamps: true
  }
);

const Lavoro = mongoose.model("Lavoro", lavoroSchema);

module.exports = Lavoro;
