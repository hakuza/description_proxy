const request = require("request-promise");

let options = {
	//specify data from Udemy API
  url: `https://www.udemy.com/api-2.0/courses/?page_size=200&search=programming&ordering=highest-rated&fields[course]=title,headline,num_lectures,num_subscribers,num_quizzes,created,visible_instructors,avg_rating,price,num_reviews,image_240x135,is_paid,local`,
  headers: {
    Authorization:
      "Basic a1h3YTFvbWcwSlhMODBEV3p5WW1HMjNwTjdPY014OFBqWlFLazdWbDp4WTN5ek11UlZBa2xIT2gyNHo4OG9nSThTVUtKdjlkWEZSM2Z3MEhkYU5wWUhvdUlZRmdkaFRIZDRsT20yMnFqMGpUdlFCUkg3Uml2SWQ5S0REalVlZEJYNEdNNm1UdXNDZkNPY2pSRVlJQndDcWlKVVdFdmt6bFdud3J1U3A2Qg==",
    Accept: "application/json, text/plain, */*"
  }
};

module.exports = async function getCourses() {
	//reach out to Udemy API
  let response;
  try {
    response = await request(options);
  } catch (err) {
    console.error(err);
  }
  //parse the returned JSON 
  //Array of Udemy courses and their info is in the results property of the response
  response = JSON.parse(response).results;
  //return array of Udemy courses and relevent info
  return response;
};

