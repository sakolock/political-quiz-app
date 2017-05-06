var ChoicesCollection = Backbone.Collection.extend({
  model: Choice,
  comparator: 'name'
});