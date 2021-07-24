const express = require('express');
const router = express.Router();
const AnswerCtrl = require('../controllers/answerControllers');

const {
    protect,
    answerAuth
} = require('../middleware/authMiddleware');

router.param('', AnswerCtrl.loadAnswers);
router.post('/:question', [protect, AnswerCtrl.answerValidate], AnswerCtrl.createAnswer);
router.delete('/:question/:answer', [protect, answerAuth], AnswerCtrl.removeAnswer);

module.exports = router;