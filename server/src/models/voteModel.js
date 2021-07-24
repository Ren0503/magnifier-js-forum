const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    }, 
    vote: {
        type: Number,
        required: true,
    }
}, {
    _id: false,
});

module.exports = voteSchema;