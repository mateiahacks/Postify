const asyncHandler = require('express-async-handler');
const Post = require('../models/postModel');
const User = require('../models/userModel');

const search = asyncHandler(async (req, res) => {
    const word = req.query.word;

    if (!word) {
        res.status(400);
        throw new Error("Wasn't provided search key word parameter");
    }

    const regex = RegExp(word, 'i');

    const users = await User.find({name: {$regex: regex}}).limit(5).select("name");
    const posts = await Post.find({title: {$regex: regex}}).limit(5).select("title");

    res.json({users, posts});
});

module.exports = {
    search,
}
