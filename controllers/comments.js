
const Comment = require('../models/Comment');

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

exports.createComment = function (req, res) {
  let comment = new Comment({
    'title': req.body.title,
    'text': req.body.text
  });

  comment.save((err) => {
    if (err)
      sendError(err, res);
    response.data = 'Comment created';
    res.json(response);
  });
};

exports.getComments = function (req, res) {
  Comment.find({}, function (err, comments) {
    if (err)
      sendError(err, res);
    response.data = comments;
    res.json(response);
  });
};

exports.deleteComment = function (req, res) {
  let commentId = req.params.commentid;

  Comment.findByIdAndRemove(commentId, function (err, comment) {
    if(err)
      sendError(err, res);
    response.data = 'Comment deleted'
    res.json(response);
  });
};
