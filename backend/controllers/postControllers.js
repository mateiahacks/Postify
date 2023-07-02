const Post = require('../models/postModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// @desc Get posts
// @route GET /api/posts/
// @access Public

const getPosts = asyncHandler( async (req, res) => {
    const posts = await Post.find();

    res.status(200).json(posts);
});

const setPost = asyncHandler( async (req, res) => {
    const { title, content } = req.body;
    if(!title || !content) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    const post = await Post.create({
        title, content,
        author: req.user,
    });

    console.log(post);

    res.status(201).json(post);

});

const putPost = (req, res) => {
    res.json({
        message: "Put post",
    })
}

const deletePost = (req, res) => {
    res.json({
        message: "Remove post"
    })
}


module.exports = {
    getPosts,
    setPost,
    putPost,
    deletePost
}