// Create web server

var express = require('express');
var router = express.Router();

// Get database
var db = require('../db');

// Get controller
var commentController = require('../controllers/commentController');

// Get all comments
router.get('/', commentController.getAllComments);

// Get comment by id
router.get('/:id', commentController.getCommentById);

// Get comment by user id
router.get('/user/:id', commentController.getCommentByUserId);

// Get comment by post id
router.get('/post/:id', commentController.getCommentByPostId);

// Create new comment
router.post('/', commentController.createComment);

// Update comment by id
router.put('/:id', commentController.updateComment);

// Delete comment by id
router.delete('/:id', commentController.deleteComment);

module.exports = router;