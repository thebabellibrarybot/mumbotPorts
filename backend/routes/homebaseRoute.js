const express = require('express');
const router = express.Router();
const { getHomeBaseInfo } = require('../controllers/homebaseController');
const { getHomeBaseIconInfo } = require('../controllers/homebaseiconController');

router.get('/:id', getHomeBaseInfo)
router.get('/icon/info', getHomeBaseIconInfo)

module.exports = router;