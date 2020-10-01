const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/blogs/create', blogController.blog_create_get)
router.get('/blogs', blogController.blog_index);
router.post('/blogs', blogController.blog_create_post);

//create blog
//putting this below will throw an error so we need to handle it by putting it here
//you can see the error by putting it here
//the issue is as this program runs top to bottom see tut 11 7 minutes mark

//create blog here
router.get('/blogs/:id', blogController.blog_details)
//delete request
router.delete('/blogs/:id', blogController.blog_delete);


module.exports = router;