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

    const page_number = Math.floor(posts.length/PAGE_SIZE)+1;
    
    const firstIndex = Math.floor(posts.length / PAGE_SIZE) + (page-1)*PAGE_SIZE - 1;
    const lastIndex = Math.floor((firstIndex + PAGE_SIZE));

    posts = posts.filter((_, i) => i >= firstIndex && i < lastIndex);

    res.status(200).json({page_size: PAGE_SIZE, posts, page_number});
});

const getAuthorPosts = asyncHandler( async (req, res) => {
    const authorName = req.params.name;
    const page = Number(req.query.page);

    if (!authorName) {
        res.status(400);
        throw new Error("No id parameter provided");
    }

    let posts = await Post.find({ "author.name": authorName });

    const page_number = Math.floor(posts.length/PAGE_SIZE)+1;
    
    const firstIndex = Math.floor(posts.length / PAGE_SIZE) + (page-1)*PAGE_SIZE - 1;
    const lastIndex = Math.floor((firstIndex + PAGE_SIZE));

    posts = posts.filter((_, i) => i >= firstIndex && i < lastIndex);

    res.json({ posts, page_size: PAGE_SIZE, page_number });

});

const getPost = asyncHandler( async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(400);
        throw new Error("Not provided with id");
    }
    const post = await Post.findById(id);

    console.log(post);

    if (!post) {
        res.status(404);
        throw new Error("Post with that id not found");
    }

    res.status(200).json(post);
} );

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
    deletePost,
    getAuthorPosts,
    getPost
}