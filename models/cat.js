 var mongoose = require('mongoose')


mongoose.connect('localhost', 'cat');
var schema = mongoose.Schema({ name: String, age: Number, color: String });
var Cat = mongoose.model('Cat', schema);

module.exports = Cat;