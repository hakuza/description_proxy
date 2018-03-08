const express = require("express");
const router = express.Router();
const Review = require("./../database/index.js");
const getCourses = require('../udemyAPIHelper.js');
router.get("/", async function (req, res) {
  let find;
  try {
    find = await Review
      .Review
      .find();
  } catch (err) {
    let seed;
    try {
      seed = await getCourses();
    } catch (err) {
      res.send(500);
    }
    res.send(seed);
  }
  res.send(find);

});

module.exports = router;
