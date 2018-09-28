const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  text: String,
  department: String,
  status: {
    type: String,
    default: "Open"
  },
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;
