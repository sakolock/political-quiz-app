// var ChoiceView = Backbone.View.extend({
//   tagName: 'li',
//   template: App.templates.choice,
//   attributes: {
//     "data-id": this.id
//   },
//   events: {
//     "click": "selectAnswer"
//   },
//   selectAnswer: function(e) {
//     e.preventDefault();
//     console.log('clicked ' + this.id);
//     this.highlightChoice(e);
//   },
//   highlightChoice: function(e) {
//     $(e.target).closest('li').addClass('active');
//   },
//   render: function() {
//     this.$el.html(this.template(this.model));
//     $('#choices').append(this.$el);
//   },
//   initialize: function(model) {
//     this.model = model;
//     this.render();
//   }
// });