const express = require('express');
const router = express.Router();
const { getPosts, setPost, putPost, deletePost, likePost, getAuthorPosts, getPost } = require('../controllers/postControllers');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getPosts).post(protect, setPost);

router.route('/:id').put(protect, putPost).delete(protect, deletePost);

router.route('/like/:id').put(protect, likePost);

router.route('/author/:name').get(getAuthorPosts);

router.route('/post/:id').get(getPost);

module.exports = router;
