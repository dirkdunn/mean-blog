var express = require('express');
var router = express.Router();
var Post = require('../models/post');

// get all posts
router.get('/', (req,res)=>{
  Post.find(function(err,posts){
    if(err){
      console.log(err);
      req.send(err);
    } else {
      res.json(posts);
    }
  })
});

// get one post
router.get('/:id',(req,res)=>{
    Post.find(req.params.id,function(err,posts){
      if(err){
        console.log(err);
        req.send(err);
      } else {
        res.json(posts);
      }
    })
})

// add a post
router.post('/',(req,res)=>{
var postid;

Post.find((err,posts)=>{
  postid = posts.length+1;

  var newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    postid: postid
  });

  console.log("NEWPOST: ", newPost)

  newPost.save((err,newPost)=>{
    if(err){
      console.log("ERROR: ",err)
      res.send(err);
    } else {
      console.log("SUCCESS: ", newPost)
      res.json(newPost);
    }
  });

});

})

// update a post
router.patch('/:id',(req,res)=>{

})

// delete a post
router.delete('/:id',(req,res)=>{

})


module.exports = router;
