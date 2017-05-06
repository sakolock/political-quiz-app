var router = new (Backbone.Router.extend({
  routes: {
    "Washington-DC-Elites": "dcElites"
  },
  index: function() {
    App.renderQuestion();
    this.navigate('/');
  },
  questionView: function() {
  },
  dcElites: function() {
    console.log('got em');
    App.renderDCElitesPage();
    this.navigate('/Washington-DC-Elites');
  },
  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});

$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});