var FooterView = Backbone.View.extend({
  el: 'footer',
  template: App.templates.footer,
  render: function() {
    this.$el.html(this.template);
  },
  initialize: function() {
    this.render();
  }
});