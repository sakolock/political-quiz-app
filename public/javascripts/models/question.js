var Question = Backbone.Model.extend({
  defaults: {
    complete: false
  }
});

// OLD NEEDS TO BE MERGED
// var QuestionModel = Backbone.Model.extend({
//   initialize: function() {
//     this.on('change', function() {
//       console.log('changed a thing');
//     });
//   }
// });