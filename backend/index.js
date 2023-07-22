const express = require("express");
const mongoose = require("mongoose");
const User = require("./Models/user");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use(cors({origin: ['http://localhost:3000', 'http://127.0.0.1:5000']}));
const trains = [
  {
    trainName: "Chennai Exp",
    trainNumber: "2344",
    departureTime: {
      Hours: 21,
      Minutes: 35,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 3,
      AC: 1,
    },
    price: {
      sleeper: 2,
      AC: 5,
    },
    delayedBy: 15,
  },
  {
    trainName: "Hyderabad Exp",
    trainNumber: "2341",
    departureTime: {
      Hours: 23,
      Minutes: 55,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 6,
      AC: 7,
    },
    price: {
      sleeper: 554,
      AC: 1854,
    },
    delayedBy: 5,
  },
];
mongoose.connect(
  "mongodb+srv://manichand:root@cluster0.oll6q.mongodb.net/assingment?retryWrites=true&w=majority"
);
app.get("/trains", (req, res) => {
  return res.json(trains);
});

app.get("/train/:id", (req, res) => {
  for (var i = 0; i < trains.length; i++) {
    if (trains[i].trainNumber == req.params.id) {
      res.json(trains[i]);
    }
  }
});

app.post("/register", async (req, res) => {
  const { companyName, ownerName, ownerEmail, rollNo, accessCode } = req.body;
  const newUser = await new User({
    companyName,
    ownerName,
    rollNo,
    ownerEmail,
    accessCode,
  }).save();
  const response = {
    companyName: "Train Central",
    clientID: "3fa0c7a1-a4b8-4355-9899-88940e4392b0",
    clientSecret: "nHZyTzEfMSdhUvtM",
  };
  res.json(response);
});

app.post("/auth", async (req, res) => {
  const { companyName, clientID, ownerName, ownerEmail, rollNo, clientSecret } =
    req.body;
  const user = {
    companyName: "Train Central",
    clientID: "3fa0c7a1-a4b8-4355-9899-88940e4392b0",
    ownerName: "Aditya Saini",
    ownerEmail: "Aditya.20b1531040@abes.ac.in",
    rollNo: "2000321530010",
    clientSecret: "nHZyTzEfMSdhUvtM",
  };
  if (
    companyName == user.companyName &&
    clientID == user.clientID &&
    ownerName == user.ownerName &&
    ownerEmail == user.ownerEmail &&
    rollNo == user.rollNo &&
    clientSecret == user.clientSecret
  ) {
    const response = {
      token_type: "Bearer",
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMDMwOTcsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiM2ZhMGM3YTEtYTRiOC00MzU1LTk4OTktODg5NDBlNDM5MmIwIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDAzMjE1MzAwMTAifQ.1o-PZVxYfr-FpUZf_BjPNGQ2AuWU4vlA9JXWu7Ct2j4",
      expires_in: 1690003097,
    };
    return res.json(response);
  }
});

app.listen(5000, () => {
  console.log("port running on server 5000");
});
