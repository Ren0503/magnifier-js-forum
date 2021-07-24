const express = require('express');
const router = express.Router();
const VoteCtrl = require('../controllers/voteControllers');

const {
    protect,
} = require('../middleware/authMiddleware');

router.get('/upvote/:question/:answer?', protect, VoteCtrl.upvote);
router.get('/downvote/:question/:answer?', protect, VoteCtrl.downvote);
router.get('/unvote/:question/:answer?', protect, VoteCtrl.unvote);

module.exports = router;