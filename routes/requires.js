const express = require('express');
const router = express.Router();
const requiresCtrl = require('../controllers/requires');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/plants/:id/require/new', ensureLoggedIn, requiresCtrl.new);
router.post('/plants/:id/requires',requiresCtrl.create);

module.exports = router;