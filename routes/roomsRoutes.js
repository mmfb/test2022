var express = require('express');
var router = express.Router();
var rModels = require('../models/roomsModel.js');

router.get('/', async function(req, res, next) {
  let result = await rModels.getAllRooms();
  res.status(result.status).send(result.result);
});

module.exports = router;