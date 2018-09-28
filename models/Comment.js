const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  title: String,
  text: String
}, { timestamps: true });

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
