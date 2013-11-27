/*
 * A Topic Link is a relationship between two Topics
 * A Topic link is directional: pointing from a origin Topic to a destination Topic
 * To create a two way link you would need to create two TopicLinks with alternating origin and destination Topics
 */
App.TopicLink = DS.Model.extend({
  name: DS.attr('string'),
  origin_topic: DS.attr('integer'), //The ID of the from topic
  destination_topic: DS.attr('integer'), // The ID of the to topic
});
