var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/questions.json');
var Questions = require(path.dirname(__dirname) + '/routes/questions_node');
var Choices = require(path.dirname(__dirname) + '/routes/choices_node');

module.exports = function(router) {
  router.get('/', function(req, res) {
    res.render('index', {
      questions: Questions.get(),
      choices: Choices.get()
    });
  });
};