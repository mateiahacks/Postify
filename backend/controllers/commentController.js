const asyncHandler = require('express-async-handler');
const Comment = require('../models/commentModel');

const setComment = asyncHandler( async (req, res) => {
    const postId = req.params.post_id;
    const { content } = req.body;

    if (!postId || !content) {
        res.status(400);
        throw new Error("Bad request");
    }

    const comment = await Comment.create({
        author: req.user,
        postId: postId,
        content: content,
    });

    res.status(201).json(comment);

} );

const getComments = asyncHandler(async (req, res) => {
    const postId = req.params.post_id;

    if (!postId) {
        res.status(400);
        throw new Error("Post ID not provided");
    }

    const comments = await Comment.find({ postId: postId });

    res.json(comments);

});

module.exports = {
    setComment,
    getComments,
}