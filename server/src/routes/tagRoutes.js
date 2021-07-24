const express = require('express');
const router = express.Router();
const TagCtrl = require('../controllers/tagControllers');

router.get('/', TagCtrl.listTags);
router.get('/popularTags', TagCtrl.listPopularTags);
router.get('/:tag', TagCtrl.searchTags);

module.exports = router;