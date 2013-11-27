App.TopicsController = Ember.ArrayController.extend({
  actions: {
    createTopic: function() {
      var name = this.get('newTopicName');
      if (!name.trim()) { return }

      var topic = this.store.createRecord( 'topic', {
        name: name
      });
      this.set('newTopicName', '');
      topic.save();
    }
  }
});
