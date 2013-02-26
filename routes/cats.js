var Cat = require('../models/cat');

exports.new = function(req, res){
	var kitty = new Cat({ name: req.body.name, age: parseInt(req.body.age), color: req.body.color });
	kitty.save(function (err) {
  		res.redirect('/cats');
	});
};

exports.color = function(req, res){
	var cats = Cat.find({color: req.params.color}).sort('-age').exec(function (err, docs){
		res.render('colors', {cats: docs, title: req.params.color.charAt(0).toUpperCase() + req.params.color.slice(1) + " Cats"});
	});
};


exports.index = function(req, res){
	var cats = Cat.find({}).exec(function (err, docs){
		res.render('cats', {cats: docs, title: "Cat App"});
	});
};


exports.delete = function(req, res){
	var cats = Cat.find().sort('-age').exec(function(err, docs){
		Cat.findOne({age: docs[0].age}).remove();
		res.redirect('/cats');
	});
};
