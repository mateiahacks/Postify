const express = require('express');
const router = express.Router();
const { getPosts, setPost, putPost, deletePost } = require('../controllers/postControllers');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getPosts).post(protect, setPost);

router.route('/:id').put(putPost).delete(deletePost);


module.exports = router;
