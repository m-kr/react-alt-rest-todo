var restful = require('node-restful');
var mongoose = restful.mongoose;

var todoSchema = new mongoose.Schema({
	task: String,
	complete: Boolean
});

module.exports = restful.model('todo', todoSchema);