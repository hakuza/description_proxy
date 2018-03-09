const mongoose = require("mongoose");
const request = require("request-promise");
const getCourses = require("../helpers/getCourses.js")
const udemyCourses = require("../db/index.js")
const blueBird = require("bluebird")
// Promise.Promisify(mongoose);
const seed = async function () {
	var data = await getCourses()
	for (var i = 0; i < data.length; i++) { 
    var course = data[i]
      const courseDoc = new udemyCourses({
        id: i,
        title: course.title,
        price: course.price,
        headline: course.headline,
        num_subscribers: course.num_subscribers,
        num_quizzes: course.num_quizzes,
        num_lectures: course.num_lectures,
        image_240x135: course.image_240x135
      });
    try { 
      await courseDoc.save();	
    } catch (err) {
      console.log(err);
    }
    console.log('success')
  }
} 

seed();