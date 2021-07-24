const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    }, 
    body: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
});

commentSchema.set('toJSON', { getters: true });
commentSchema.options.toJSON.transform = (doc, ret) => {
    const obj = { ...ret };
    delete obj._id;
    return obj;
};

module.exports = commentSchema;