const rp = require("request-promise");
const Review = require("./database/index.js");

async function getCourses() {
  let data = "";
  let courseReview = [];
  let options = {
    method: "GET",
    uri: `https://www.udemy.com/api-2.0/courses/?page_size=100`, //the max size is 100
    headers: {
      Authorization: "Basic TzhFUjFwSXdseFVmSTB1MHgxYXhyUEFtWEp4V3lOWWJxWXdpVmZ1Njoyc0EyNGxoSzBKRWdvNF" +
          "lsRjd4c3pmYnZPV0M3UzZlSDJwcTVSWm8zZTdHTjdEY3JHSkZoNFcyckdsNXJ4N2ZCMlpPaFJHQ2tIU2" +
          "1WQjM0NlEyVVk3blZObzUzUVNMaWlWVXlzWTlOWE9ZdzZ4Uk43NEVMOE5SYW5haDJuUU42Tw==",
      Accept: "application/json, text/plain, */*"
    }
  };
  try {
    data = JSON.parse(await rp(options));
  } catch (err) {
    console.log(err);
  }
  for (var i = 0; i < data.results.length; i++) {
    async function getReviews(id, i) {
      let options = {
        method: "GET",
        uri: `https://www.udemy.com/api-2.0/courses/${id}/reviews/?page_size=100`, //the max size is 100
        headers: {
          Authorization: "Basic TzhFUjFwSXdseFVmSTB1MHgxYXhyUEFtWEp4V3lOWWJxWXdpVmZ1Njoyc0EyNGxoSzBKRWdvNF" +
              "lsRjd4c3pmYnZPV0M3UzZlSDJwcTVSWm8zZTdHTjdEY3JHSkZoNFcyckdsNXJ4N2ZCMlpPaFJHQ2tIU2" +
              "1WQjM0NlEyVVk3blZObzUzUVNMaWlWVXlzWTlOWE9ZdzZ4Uk43NEVMOE5SYW5haDJuUU42Tw==",
          Accept: "application/json, text/plain, */*"
        }
      };
      let review;
      try {
        review = JSON.parse(await rp(options));
      } catch (err) {
        console.log(err);
      }
      var storage = {};
      storage.courseId = i;
      storage.reviews = review.results;
      var reviewList = new Review.Review(storage);
      reviewList.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("saved!");
        }
      }).catch(err => {
        console.log(err);
      });
    }
    getReviews(data.results[i].id, i);
  }
}

getCourses().then(err => {
  if (err) {
    console.log(err);
  } else {
    null;
  }
});

module.exports = getCourses;
