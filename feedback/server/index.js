const express = require("express");
var bodyParser = require("body-parser");
var router = require("./router.js");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(bodyParser.json());

app.use("/feedback", router);

app.listen(3002, () => console.log("Example app listening on port 3002!"));
