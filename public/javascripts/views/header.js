var HeaderView = Backbone.View.extend({
  $el: $('header'),
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template);
    App.$body.find('nav').after(this.$el);
  },
  initialize: function() {
    this.render();
  }
});