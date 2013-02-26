 var mongoose = require('mongoose')


mongoose.connect('localhost', 'cat');
var schema = mongoose.Schema({ name: 'string' });
var Cat = mongoose.model('Cat', schema);

module.exports = Cat;