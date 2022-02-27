const express = require("express");
const cors = require("cors");

const app = express();
const allowedOrigins = [
  "capacitor://localhost",
  "ionic://localhost",
  "http://localhost",
  "http://localhost:8080",
  "http://localhost:8100",
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
};

// Enable preflight requests for all routes
app.options("*", cors(corsOptions));

const port = 3000;

const qrCodes = ["https://en.wikipedia.org/wiki/QR_code", "2", "3"];

app.get("/qrCodes", function (req, res) {
  res.send(qrCodes);
});

app.listen(port, function () {
  console.log("Starting...");
});
