const express = require('express');
const { route } = require('./homebaseRoute');
const router = express.Router();

// import controller
const { getPortfolio } = require('../controllers/portfolioController');
const { getLinkTree } = require('../controllers/linkTreeController');

router.get('/portfolio', getPortfolio);
router.get('linkTree', getLinkTree);

module.exports = router;