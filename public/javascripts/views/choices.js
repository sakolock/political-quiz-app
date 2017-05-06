var ChoicesView = Backbone.View.extend({
  tagName: 'ul',
  id: 'choices',
  template: App.templates.choices,
  events: {
    "click li": "selectChoice"
  },
  setChoices: function() {
    var author_id = parseInt(this.model.get("author").author_id);
    var choiceIds = [author_id]; // answer id should go in here first
    var prependIt = true;
    var self = this;

    this.answer = App.choices.get(author_id);
    this.collection.push(this.answer.toJSON());
    while (this.collection.length < 4) {
      var newChoice = randomItem(App.choices.toJSON());
      if (choiceIds.indexOf(newChoice.id) < 0) {
        this.collection.push(newChoice);
        choiceIds.push(newChoice.id);
      }
    }

    this.collection = _.shuffle(this.collection);
    this.render();
  },
  selectChoice: function(e) {
    e.preventDefault();
    var $this = $(e.target);
    var fadeInTime = 750;
    var activeAnswers = $('li.active');

    if (activeAnswers.length === 0) {
      $this.closest('li').addClass('active');
      $('#quotation').fadeOut(fadeInTime);
      $('.answer').delay(fadeInTime).fadeIn(fadeInTime);
      this.toggleChoiceStatus($this);
    }
  },
  toggleChoiceStatus: function($choice) {
    var activeAnswers = $('li.active');
    $('li[data-id="' + this.answer.id + '"]').addClass('correct');
    //if (this.isCorrect($choice) && activeAnswers.length === 1) {
      //this.giveUserPoint(); Need to send an event to application view
    //}
    //this.addUserTotalAnswered(); Need to send an event to application view
  },
  // renderChoices: function(model) {
  //   new ChoiceView(model);
  // },
  render: function() {
    this.$el.html(this.template({
      choices: this.collection
    }));
    $('article').append(this.$el);
  },
  bindEvents: function() {
    $('')
  },
  initialize: function() {
    this.collection = [];
    this.setChoices();
    // this.render();
  }
});