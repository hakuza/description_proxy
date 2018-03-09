
const mongoose = require("mongoose");
const request = require("request-promise");
const getCourses = require("../helpers/getCourses.js")

//connect to database 
const mongoUrl = 
mongoose.connect("mongodb://database/udemy");

const Schema = mongoose.Schema
//design schema for database
const udemySchema = new Schema({
  id: { type: Number, unique: true },
  title: String,
  price: String,   
  headline: String,
  num_subscribers: Number,
  num_quizzes: Number,
  num_lectures: Number,
  image_240x135: String
})
//create model
const Courses = mongoose.model("Courses", udemySchema);




module.exports = Courses