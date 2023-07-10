const express = require('express');
const router = express.Router();
const { setComment, getComments } = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');

router.route('/:post_id').post(protect, setComment).get(getComments);

module.exports = router;