var express = require('express');
var router = express.Router();

// Models
var Todo = require('../models/todo');

// Routes
Todo.methods(['get', 'post', 'put', 'delete']);
Todo.register(router, '/todos');

module.exports = router;