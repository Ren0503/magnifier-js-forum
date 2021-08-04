const mongoose = require('mongoose');

const voteSchema = require('./voteModel');
const commentSchema = require('./commentModel');
const answerSchema = require('./answerModel');

const questionSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
        required: true,
    }],
    score: {
        type: Number,
        default: 0,
    },
    votes: [voteSchema],
    comments: [commentSchema],
    answers: [answerSchema],
    created: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    }
});

questionSchema.set('toJSON', { getters: true });
questionSchema.options.toJSON.transform = (doc, ret) => {
    const obj = { ...ret };
    delete obj._id;
    delete obj.__V;
    return obj;
};

questionSchema.methods = {
    vote: function (user, vote) {
        const existingVote = this.votes.find((v) => v.user._id.equals(user));

        if (existingVote) {
            // reset score
            this.score -= existingVote.vote;
            if (vote == 0) {
                // remove vote
                this.votes.pull(existingVote);
            } else {
                //change vote
                this.score += vote;
                existingVote.vote = vote;
            }
        } else if (vote !== 0) {
            // new vote
            this.score += vote;
            this.votes.push({ user, vote });
        }

        return this.save();
    },

    addComment: function (author, body) {
        this.comments.push({ author, body });
        return this.save();
    },

    removeComment: function (id) {
        const comment = this.comments.id(id);
        if (!comment) throw new Error('Comment not found');
        comment.remove();
        return this.save();
    },

    addAnswer: function (author, text) {
        this.answers.push({ author, text });
        return this.save();
    },

    removeAnswer: function (id) {
        const answer = this.answers.id(id);
        if (!answer) throw new Error('Answer not found');
        answer.remove();
        return this.save();
    }
};

questionSchema.pre(/^find/, function () {
    this.populate('author')
        .populate('comments.author', '-isAdmin')
        .populate('answers.author', '-isAdmin')
        .populate('answers.comments.author', '-isAdmin');
});

questionSchema.pre('save', function (next) {
    this.wasNew = this.isNew;
    next();
});

questionSchema.post('save', function (doc, next) {
    if (this.wasNew)
        this.vote(this.author._id, 1);
    doc.populate('author')
        .populate('comments.author', '-isAdmin')
        .populate('answers.author', '-isAdmin')
        .populate('answers.comments.author', '-isAdmin')
        .execPopulate()
        .then(() => next());
});


module.exports = mongoose.model('Question', questionSchema);