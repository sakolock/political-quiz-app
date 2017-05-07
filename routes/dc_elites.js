var path = require('path');
var Questions = require(path.dirname(__dirname) + '/modules/questions_node');
var Choices = require(path.dirname(__dirname) + '/modules/choices_node');

module.exports = function(router) {
  router.get('/Washington-DC-Elites', function(req, res) {
    res.render('dc_elites', {
      questions: Questions.get(),
      choices: Choices.get(),
      pageName: 'Oh No!'
    });
  });
};