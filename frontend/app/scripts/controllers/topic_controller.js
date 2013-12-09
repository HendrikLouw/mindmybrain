App.TopicController = Ember.ObjectController.extend({
  actions: {
    createTopicLink: function() {
      var origin = this.get('id');
      var name = this.get('newName');
      var destination = this.get('destination');
      
      var link = this.store.createRecord('topic_link', {
        origin: origin,
        name: name,
        destination: destination 
      });
      this.set('newName', '');
      this.set('origin', '');
      this.set('destination', '');
      link.save();
    }
  }
});
