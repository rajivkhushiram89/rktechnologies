const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const api = express();
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


api.get("/:id", function(req, res) {
  var url_id = req.params.id;
  res.status(200).send(url_id);
});

exports.relay = functions.region("asia-northeast1").https.onRequest(api)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
