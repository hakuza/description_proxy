const controller = require('./controllers');
const router = require('express').Router();

router.get('/compare', controller.compare.get);

module.exports = router;
