const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/userControllers');

router.get('/', UserCtrl.listUsers);
router.get('/:search', UserCtrl.search);
router.get('/:username', UserCtrl.find);

module.exports = router;