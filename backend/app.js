const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let cors = require("cors");

const API_PORT = 3001;
const app = express();
const router = express.Router();

const mongoDB =
  "mongodb+srv://colin:colin@firstcluster-ggfnz.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => console.log("connected to the database"));

app.listen(API_PORT, () => console.log("listening on port: " + API_PORT));
