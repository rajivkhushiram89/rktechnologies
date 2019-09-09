const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const api = express();
const api2 = express();

const cors = require('cors');

api.use(
    cors({
      origin: "*",
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Content-Length",
        "X-Requested-With",
        "Accept"
      ],
      methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );

  api2.use(
    cors({
      origin: "*",
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Content-Length",
        "X-Requested-With",
        "Accept"
      ],
      methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );


api.get("/r/:id", function(req, res) {
  var url_id = req.params.id;
  res.status(200).send(url_id);
});

api2.get("/", function(req, res) {
    var url_id = "wtf"
    res.status(200).send(url_id)
  });


exports.api = functions.https.onRequest(api)
exports.relay2 = functions.https.onRequest(api2)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
