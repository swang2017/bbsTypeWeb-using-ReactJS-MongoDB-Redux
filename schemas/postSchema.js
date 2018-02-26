const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const postSchema = new Schema({
  username:String,
  title: String,
  message: String,
  datefield:Date,
  postCategory:String,
  children:[]
})
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
