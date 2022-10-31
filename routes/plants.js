const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', plantsCtrl.index);
