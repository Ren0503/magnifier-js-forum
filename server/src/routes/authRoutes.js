const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/userControllers');

router.post('/signup', UserCtrl.validateUser, UserCtrl.signup);
router.post('/authenticate', UserCtrl.validateUser, UserCtrl.authenticate);

module.exports = router;