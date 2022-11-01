var express = require('express');
var router = express.Router();
var plantsCtrl = require('../controllers/plants');
var ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', plantsCtrl.index);
router.get('/new', ensureLoggedIn, plantsCtrl.new);
router.get('/:id', ensureLoggedIn, plantsCtrl.show);
router.post('/', ensureLoggedIn, plantsCtrl.create);

module.exports = router;



