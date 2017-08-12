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
  console.log("POSTS: ",posts);
  postid = posts.length ? posts[posts.length-1].postid +1 : 1;


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
  console.log("ID IS: ",req.params.id)
  // Post.find({},(err,posts)=>{
  //   if(err){
  //     // console.log("ERROR: ",err);
  //     res.send(err)}
  //   else {
  //
  //   }
  // });

  Post.findByIdAndRemove(req.params.id, (err,deletedPost)=>{
    console.log(deletedPost)
    if(err){
      // console.log("ERROR: ",err);
      res.send(err)}
    else {
      res.json(deletedPost);
    }
  })
})


module.exports = router;
