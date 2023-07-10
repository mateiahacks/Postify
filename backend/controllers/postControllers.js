const Post = require('../models/postModel');
const User = require('../models/userModel');
const Comment = require('../models/commentModel');
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

    res.status(201).json(post);

});

const likePost = asyncHandler( async (req, res) => {
    const postId = req.params.id;
    const userId = req.user.id;

    const post = await Post.findById(postId);

    if (post.likes.includes(userId)) {
        post.likes = post.likes.filter((id) => id !== userId);
    } else {
        post.likes.push(userId);
    }
    await post.save();
    res.json(post);
    
});

const putPost = asyncHandler(async (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    if(!title || !content) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    const post = await Post.findById(postId);

    if (post.author._id.toString() !== req.user._id.toString()) {
        res.status(400);
        throw new Error("Incorrect user");
    }
    
    post.title = title;
    post.content = content;
    await post.save();

    res.json(post);

})

const deletePost = asyncHandler( async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    console.log(post.author._id.toString());
    console.log(req.user._id.toString());
    if (post.author._id.toString() !== req.user._id.toString()) {
        res.status(400);
        throw new Error("Incorrect user");
    }

    if (!post) {
        res.status(400);
        throw new Error("Post not found");
    }

    await Comment.deleteMany({ postId: postId });

    await Post.deleteOne({ _id: postId });
    res.json({ msg: "Post successfuly removed" });
});


module.exports = {
    getPosts,
    setPost,
    putPost,
    likePost,
    deletePost
}