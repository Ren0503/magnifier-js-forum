const express = require('express');
const router = express.Router();

const TagCtrl = require('../controllers/tagControllers');
const UserCtrl = require('../controllers/userControllers');
const VoteCtrl = require('../controllers/voteControllers');
const AnswerCtrl = require('../controllers/answerControllers');
const CommentCtrl = require('../controllers/commentControllers');
const QuestionCtrl = require('../controllers/questionControllers');

const {
    protect,
    answerAuth,
    commentAuth,
    questionAuth,
} = require('../middleware/authMiddleware');

//  Authentication
router.post('/signup', UserCtrl.signupUser, UserCtrl.signup);
router.post('/login', UserCtrl.loginUser, UserCtrl.login);

//  Users
router.get('/users', UserCtrl.listUsers);
router.get('/users/:search', UserCtrl.search);
router.get('/user/:username', UserCtrl.find);

//  Questions
router.param('question', QuestionCtrl.loadQuestions);
router.post('/questions', [protect, QuestionCtrl.questionValidate], QuestionCtrl.createQuestion);
router.get('/question/:question', QuestionCtrl.show);
router.get('/question', QuestionCtrl.listQuestions);
router.get('/questions/:tags', QuestionCtrl.listByTags);
router.get('/question/user/:username', QuestionCtrl.listByUser);
router.delete('/question/:question', [protect, questionAuth], QuestionCtrl.removeQuestion);

//  Tags
router.get('/tags/popularTags', TagCtrl.listPopularTags);
router.get('/tags/:tag', TagCtrl.searchTags);
router.get('/tags', TagCtrl.listTags);

//  Answers
router.param('answer', AnswerCtrl.loadAnswers);
router.post('/answer/:question', [protect, AnswerCtrl.answerValidate], AnswerCtrl.createAnswer);
router.delete('/answer/:question/:answer', [protect, answerAuth], AnswerCtrl.removeAnswer);

//  Votes
router.get('/votes/upvote/:question/:answer?', protect, VoteCtrl.upvote);
router.get('/votes/downvote/:question/:answer?', protect, VoteCtrl.downvote);
router.get('/votes/unvote/:question/:answer?', protect, VoteCtrl.unvote);

//  Comments
router.param('comment', CommentCtrl.loadComments);
router.post('/comment/:question/:answer?', [protect, CommentCtrl.validate], CommentCtrl.createComment);
router.delete('/comment/:question/:comment', [protect, commentAuth], CommentCtrl.removeComment);
router.delete('/comment/:question/:answer/:comment', [protect, commentAuth], CommentCtrl.removeComment);

module.exports = router;
