var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
mongoose.connect("mongodb://database/coursereviews");

var Schema = mongoose.Schema;

var reviewSchema = new Schema({courseId: Number, reviews: Array});

var Review = mongoose.model("Review", reviewSchema);

module.exports.Review = Review;
