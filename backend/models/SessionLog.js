const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const SessionLog = new Schema(
  {
    title: String,
    content: String
  },
  { timestamps: true }
);

module.exports = Mongoose.model("SessionLog", SessionLog);
