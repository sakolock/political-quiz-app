var path = require('path');
var Questions = require(path.resolve(path.dirname(__dirname) + '/modules/questions_node'));
var Choices = require(path.resolve(path.dirname(__dirname) + '/modules/choices_node'));

module.exports = function(router) {
  router.get('/', function(req, res) {
    res.render('index', {
      questions: Questions.get(),
      choices: Choices.get()
    });
  });
};