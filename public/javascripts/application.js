var App = {
  $el: $('main'),
  $body: $('body'),
  templates: JST,
  renderQuestion: function() {
    var model = newRandomItem(this.questions);
    this.question = new Question(model);
    this.question.view = new QuestionView({
      model: model
    });
    this.question.choicesView = new ChoicesView({
      model: model
    });

    console.log(this.question.view.model.toJSON());
  },
  renderHeader: function() {
    this.headerView = new HeaderView();
  },
  renderFooter: function() {
    this.footerView = new FooterView();
  },
  // loadQuestions: function() {
  //   this.questions = Questions.get();
  // },
  renderDCElitesPage: function() {
    this.dcElitesView = new DCElitesView();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('destroy_question', this.renderQuestion.bind(this));
  },
  init: function() {
    this.renderHeader();
    this.renderFooter();
    this.renderQuestion();
    this.bindEvents();
  }
};

function newRandomItem(arr) {
  var newItemArr = arr.filter(function(item) {
    return !item.seen;
  });
  var defaultObj = {
    id: 12,
    quotation: 'That\'s all the quotes I have!',
    author: {
      author_id: 0,
      name: 'Steve'
    },
    fullQuote: 'No More Quotes!',
    citation: 'none, but come back next week for more!',
  };

  return randomItem(newItemArr) ? randomItem(newItemArr) : defaultObj;
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}