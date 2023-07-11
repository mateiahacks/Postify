const Post = require('../models/postModel');
const User = require('../models/userModel');
const Comment = require('../models/commentModel');
const asyncHandler = require('express-async-handler');

// @desc Get posts
// @route GET /api/posts/
// @access Public

const PAGE_SIZE = 3;

const getPosts = asyncHandler( async (req, res) => {
    const page = Number(req.query.page);

    let posts = await Post.find();
    
    const firstIndex = Math.floor(posts.length / PAGE_SIZE) + (page-1)*PAGE_SIZE - 1;
    const lastIndex = Math.floor((firstIndex + PAGE_SIZE));

    const temp = {
        postLength: posts.length,
        PAGE_SIZE,
        firstIndex,
        lastIndex,
        page
    }

    console.log(temp);

    posts = posts.filter((_, i) => i >= firstIndex && i < lastIndex);

    res.status(200).json({page_size: PAGE_SIZE, posts, page_number: Math.floor(posts.length/PAGE_SIZE)+1});
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
    
    if (post.author._id.toString() !== req.user._id.toString()) {
        res.status(400);
        throw new Error("Incorrect user");
    }

    if (!post) {
        res.status(400);
        throw new Error("Post not found");
    }

    // Delete all comments of the post

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