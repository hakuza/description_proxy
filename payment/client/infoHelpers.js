import $ from 'jquery';

const calculateRandomPrice = function (price) {
  let caché = [];
	const givenPrice = Number(price.slice(1));
  // const saleFactor = Math.round(Math.floor((Math.random() * 10) + 1));
  const saleFactor = Math.floor(((Math.random() * 5) + 1).toFixed(2));
  const finalPrice = Math.round((givenPrice * saleFactor) * 100)/100
  caché[0] = finalPrice;
  caché[1] = Math.round(((finalPrice - givenPrice) / finalPrice) * 100) 
  return caché
}

const getYoutubeVideos = (query,callback) => {
	$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: $.extend({
      key: 'AIzaSyCZjYAHiCyd95PEhnKty730V0h7QsQ3grw',
      q: query,
      part: 'snippet'
    }, 
    {maxResults: 5, pageToken: $('#pageToken').val()}),

    contentType: 'application/json',
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      console.log('FAILED to load data!');
    }
	})
};



export {calculateRandomPrice, getYoutubeVideos,}
