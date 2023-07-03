const express = require('express');
const router = express.Router();
const { getPosts, setPost, putPost, deletePost, likePost } = require('../controllers/postControllers');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getPosts).post(protect, setPost);

router.route('/:id').put(protect, putPost).delete(protect, deletePost);

router.route('/like/:id').put(protect, likePost);

module.exports = router;
