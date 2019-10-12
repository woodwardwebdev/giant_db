const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let cors = require("cors");

const API_PORT = 3001;
const app = express();
const router = express.Router();

const API = require("../backend/API_file.json");

const SessionLog = require("./models/SessionLog");

const mongoDB = API.API_KEY;
console.log(mongoDB);
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => console.log("connected to the database"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SessionLog.create({
//   title: "First Post",
//   content: "This is the test for a first post"
// }).then(createdSession => {
//   console.log(createdSession);
// });

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  SessionLog.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// // this is our update method
// // this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  SessionLog.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// // this is our delete method
// // this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  SessionLog.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// // this is our create methid
// // this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new SessionLog();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// // append /api for our http requests
app.use("/api", router);

app.listen(API_PORT, () => console.log("listening on port: " + API_PORT));
