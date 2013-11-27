App.TopicsRoute = Ember.Route.extend({
  model: function() {
   return this.store.findAll('topic');
  }
}); 
