const express = require('express');
const router = express.Router();

const userPost = require('../controllers/post_controllers');


router.get('/post',userPost.post);


module.exports = router;