var express = require('express');
var router = express.Router();
var dummyPosts = [
  { title: 'Post 1', body: 'Whats up Post 1', postid: 1},
  { title: 'Post 2', body: 'Whats up Post 2', postid: 2},
  { title: 'Post 3', body: 'Whats up Post 3', postid: 3}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testapi', function(request,response,next){
  response.json({
    posts: dummyPosts
  })
});

module.exports = router;
