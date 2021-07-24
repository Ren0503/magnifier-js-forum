const express = require('express');
const router = express.Router();
const CommentCtrl = require('../controllers/commentControllers');

const {
    protect,
    commentAuth
} = require('../middleware/authMiddleware');

router.param('', CommentCtrl.loadComments);
router.post('/:question/:answer?', [protect, CommentCtrl.validate], CommentCtrl.createComment);
router.delete('/:question/:comment', [protect, commentAuth], CommentCtrl.removeComment);
router.delete('/:question/:answer/:comment', [protect, commentAuth], CommentCtrl.removeComment);

module.exports = router;