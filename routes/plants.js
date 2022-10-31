var express = require('express');
var router = express.Router();
var plantsCtrl = require('../controllers/plants');
var ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', plantsCtrl.index);
router.get('/new', plantsCtrl.new);

module.exports = router;



