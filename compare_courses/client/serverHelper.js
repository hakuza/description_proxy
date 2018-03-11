import axios from 'axios';

exports.get = function (courseID) {
  return axios.get('/api/compare', {
    params: {
      id: courseID
    }
  });
};
