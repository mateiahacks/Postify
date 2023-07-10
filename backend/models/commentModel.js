const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    author: {
        type: Object,
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
    content: {
        type: String,
        required: [true, "Please add a text"],
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Comment", commentSchema);