const express = require('express');
const router = express.Router();
const { getHomeBaseInfo } = require('../controllers/homebaseController');

router.get('/:id', getHomeBaseInfo)

module.exports = router;