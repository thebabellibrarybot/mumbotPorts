const express = require('express');
const router = express.Router();
const { getHomeBaseInfo } = require('../controllers/homebaseController');
const { getHomeBaseIconInfo } = require('../controllers/homebaseIconController');

router.get('/:id', getHomeBaseInfo)
router.get('/icon/info', getHomeBaseIconInfo)
router.get('/home/icon/info', getHomeBaseIconInfo)
router.get('/mumbots/I', getHomeBaseIconInfo)
 
module.exports = router;