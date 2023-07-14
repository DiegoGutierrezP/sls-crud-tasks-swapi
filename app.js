
const express = require("express");
const serverless = require("serverless-http");
const router = require("./routes");

const app = express();

app.use(express.json());

app.use('/',router);



app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.use((err, req, res) => {
  res.status(err.status || 500).send();
});



module.exports.handler = serverless(app);

