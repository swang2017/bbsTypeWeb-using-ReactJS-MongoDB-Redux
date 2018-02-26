const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Post = require('./schemas/postSchema')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

let db = mongoose.connection
mongoose.connect('mongodb://localhost/katyforum')
mongoose.set("debug", true)

// get the connection object

// on connection fire the following event
db.once('open',function(){
  console.log('connected')
})


app.get('/api/renderpost', (req, res) => {
  Post.find(function(error,Posts){
    res.json(Posts)
  }).select('-__v')
});


app.post('/api/newpost', (req, res) => {
  let title = req.body.title
  let username=req.body.username
  let message = req.body.message
  let postCategory = req.body.postCategory
  let datefield = new Date()

  // save the user in the mongodb database
  let newpost = new Post({ username: username, title : title, message : message, datefield:datefield, postCategory:postCategory})

  newpost.save(function(error,newPost){
    console.log("saved record")
    // let redirectURL= '/'+ postCategory
    // res.resend(redirectURL)

    // let parentPostId = req.body.parentPostId
//     Post.update({_id:parentPostId}, function(err, document) {
//   db.posts;
// })

  })
});


app.post('/api/postReply', (req, res) => {
  let title = req.body.title
  let username=req.body.username
  let message = req.body.message
  let postCategory = req.body.postCategory
  let datefield = new Date()
  let parentPostId = req.body.parentPostId

  // save the user in the mongodb database
  let newpost = new Post({ username: username, title : title, message : message, datefield:datefield, postCategory:postCategory})

  //savedPost.comments.push(comment)
  // save the savedPost again

  newpost.save(function(error,newPost){
    console.log("saved record")
    Post.find(function(error,Posts){
      res.json(Posts)
    }).select('-__v')
    // let redirectURL= '/'+ postCategory
    // res.redirect(redirectURL)
//     Post.update({_id:parentPostId}, {children : children.push(newPost)})
})


});


app.listen(port, () => console.log(`Listening on port ${port}`));
