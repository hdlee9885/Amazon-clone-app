const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
/* eslint max-len: ["error", { "ignoreStrings": true }] */
const stripe = require("stripe")(
    "sk_test_51IAU7vFP8FWrVSGd3gEZBzfG4BjyFPHNYNgQ6JI7Iwf2JPp2neeOzIojl1OANNLh5PizNtqNcMbbY9gqD17vuMRC00eKC8hhRJ",
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

