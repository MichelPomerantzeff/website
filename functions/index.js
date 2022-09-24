const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const { request, response } = require("express");

const stripe = require("stripe")("sk_test_51Lkc9zLJCDKq1WclBx5kaLH04NfZbNiSDXHlnBbqMgenMXroXBdDipzG2bmSb0qjWAr0wYY9OEI4ry4vGsVo9XpR00VtN8hA1z")

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send("hello world!!!!"))

app.post("/payment/create", async (request, response) => {
    const total = request.query.total
    
    console.log("Payment request Received!!! for this amount: ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)