var User = Backbone.Model.extend({
  addPoint: function() {
    this.correct += 1;
  },
  addTotalAnswered: function() {
    this.totalAnswered += 1;
  },
  calculatePercentageRight: function() {
    return this.correct / this.totalAnswered;
  },
  initialize: function() {
    this.correct = 0;
    this.totalAnswered = 0
    this.percentRight;
  }
});