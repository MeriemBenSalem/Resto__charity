var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/tet', function(req, res, next) {
  res.send('test test');
});

module.exports = router;
