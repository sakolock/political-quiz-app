var DCElitesView = Backbone.View.extend({
  el: 'article',
  template: App.templates.dc_elites,
  render: function() {
    this.$el.html(this.template({
      name: 'Washington DC Elites Page',
      text: 'Look at this page!'
    }));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});