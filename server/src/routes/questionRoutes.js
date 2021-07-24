const express = require('express');
const router = express.Router();
const QuestionCtrl = require('../controllers/questionControllers');

const {
    protect,
    questionAuth
} = require('../middleware/authMiddleware');

router.param('', QuestionCtrl.loadQuestions);
router.post('/', [protect, QuestionCtrl.questionValidate], QuestionCtrl.createQuestion);
router.get('/:question', QuestionCtrl.show);
router.get('/', QuestionCtrl.listQuestions);
router.get('/:tags', QuestionCtrl.listByTags);
router.get('/user/:username', QuestionCtrl.listByUser);
router.delete('/:question', [protect, questionAuth], QuestionCtrl.removeQuestion);

module.exports = router;