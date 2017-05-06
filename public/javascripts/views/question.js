var QuestionView = Backbone.View.extend({
  tagName: 'article',
  id: 'question',
  template: App.templates.question,
  events: {
    "click #another": "destroy"
  },
  destroy: function(e) {
    e.preventDefault();

    this.remove();
    App.trigger('destroy_question');
  },
  // have not checked this
  markQuestionAsSeen: function(quoteId) {
    quotes.forEach(function(quote) {
      if (quote.id === quoteId) {
        quote.seen = true;
      }      
    });
  },
  // checked below here
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },
  initialize: function(model) {
    // this.choices = new ChoicesView();
    this.answer = model;
    this.render();
  }
});


// function newQuestion() {
//   if (question_view !== undefined) {
//     question_view.remove();
//   }
//   question_view = new QuestionView(newRandomItem(quotes));

//   question_view.$el.fadeIn(750);  
//   return question_view;
// }  

// OLD VERSION NEEDS TO MERGE IN
// var QuestionView = Backbone.View.extend({
//   tagName: 'article',
//   id: 'question',
//   template: templates.questionTemplate,
//   choicesTemplate: templates.choiceTemplate,
//   events: {
//     'change': 'render',
//     'click #choices a li': 'selectChoice',
//     'click .question #closeMedia': 'closeMediaViewer',
//     'click aside #toggleScore': 'toggleScore'
//   },
//   markQuestionAsSeen: function(quoteId) {
//     quotes.forEach(function(quote) {
//       if (quote.id === quoteId) {
//         quote.seen = true;
//       }      
//     });
//   },
//   setChoices: function() {
//     var choiceIds = [this.answer.id];
//     var prependIt = true;

//     this.collection.push(this.answer);
//     while (this.collection.length < 4) {
//       var newChoice = randomItem(choices);

//       if (choiceIds.indexOf(newChoice.id) < 0) {
//         this.collection.push(newChoice);
//         choiceIds.push(newChoice.id);        
//       }
//     }

//     this.collection = this.collection.sort();
//   },
//   selectChoice: function(e) {
//     e.preventDefault();
//     var $this = $(e.target);
//     var fadeInTime = 750;
//     var activeAnswers = $('li.active');

//     if (activeAnswers.length === 0) {
//       $this.addClass('active');
//       $('#quotation').fadeOut(fadeInTime);
//       $('.answer').delay(fadeInTime).fadeIn(fadeInTime);
//       this.toggleAnswerStatus($this);
//     }
//   },
//   isCorrect: function($choice) {
//     return parseInt($choice.attr('data-id')) === this.answer.id;
//   },
//   toggleAnswerStatus: function($choice) {
//     var activeAnswers = $('li.active');
//     $('li[data-id="' + this.answer.id + '"]').addClass('correct');
//     if (this.isCorrect($choice) && activeAnswers.length === 1) {
//       this.giveUserPoint();
//     }
//     this.addUserTotalAnswered();
//   },
//   closeMediaViewer: function(e) {
//     e.preventDefault();
//     $('.ytp-play-button.ytp-button').trigger('click');    
//     $('.dismissable').hide();
//   },
//   toggleScore: function(e) {
//     e.preventDefault();
//     var sign = ['-', '+'];
//       console.log('yup');

//     if (this.isSmallScreen()) {
//       $('aside').animate({
//         top: sign[0] + '= ' + 40
//       }, 500);
//       sign.reverse();
//     }
//   },
//   isSmallScreen: function() {
//     return $(window).width() <= 767;
//   },
//   giveUserPoint: function() {
//     user.addPoint();
//   },
//   addUserTotalAnswered: function() {
//     user.addTotalAnswered();
//     this.renderUserPoints();
//   },
//   renderUserPoints: function() {
//     $('#correctAnswers').text(user.correct);
//     $('#totalQuestionsAnswered').text(user.totalAnswered);
//   },
//   renderAnswerChoices: function() {
//     var delayTime = 0;
//     $('#choices a').each(function() {
//       $(this).delay(delayTime).fadeIn(500);
//       delayTime += 250;
//     });
//   },
//   render: function() {
//     this.$el.html(this.template({
//       quotation: this.question.quotation,
//       choices: this.collection.models,
//       author: this.question.author,
//       fullQuote: this.question.fullQuote,
//       citation: this.question.citation,
//       hasEmbed: this.question.hasEmbed,
//       alt: this.question.alt,
//       embed: this.question.embed
//     }));
//     $('#quotationQuestion').prepend(this.$el);
//     this.renderAnswerChoices();
//   },
//   initialize: function(obj) {
//     var obj = obj || {};
//     this.question = obj;
//     this.answer = {
//       id: obj.author.author_id,
//       name: obj.author.name
//     };
//     this.markQuestionAsSeen(this.question.id);
//     this.collection = new ChoiceCollection();
//     this.setChoices();
//     this.listenTo(this.collection, 'change', this.render);
//     this.render();
//   }
// });