var express = require('express');
var router = express.Router();
var plantsCtrl = require('../controllers/plants');
var ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', ensureLoggedIn, plantsCtrl.index);
router.get('/new', ensureLoggedIn, plantsCtrl.new);
router.get('/:id', ensureLoggedIn, plantsCtrl.show);
router.post('/', ensureLoggedIn, plantsCtrl.create);
router.get('/:id/edit', ensureLoggedIn, plantsCtrl.edit);
router.put('/:id', ensureLoggedIn, plantsCtrl.update);


module.exports = router;



