const dbHelpers = require('../../db/models/helpers.js')


module.exports = {
  courses: {
    get: function (req,res) {
      dbHelpers(function (err, results){
       if (err) {
         console.error(err)
       } else {
         res.send(results)
       }	
      })
    }	
  }
}