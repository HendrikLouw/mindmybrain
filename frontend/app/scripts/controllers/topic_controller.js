App.TopicController = Ember.ObjectController.extend({
  actions: {
    createTopicLink: function() {
      var originTopic = this.get('id');
      var linkName = this.get('newLinkName');
      var destinationTopic = this.get('destinationTopic');
      
      var link = this.store.createRecord('topic_link', {
        name: name,
        origin_topic: originTopic,
        destination_topic: destinationTopic 
      });
      this.set('newLinkName', '');
      this.set('originTopic', '');
      this.set('destinationTopic', '');
      link.save();
    }
  }
});
