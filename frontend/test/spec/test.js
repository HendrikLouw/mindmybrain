/*global describe, it */
'use strict';
(function() {

  window.testHelper = {
    lookup: function(object, object_name) {
      name = object_name || "main";
      return App.__container__.lookup(object + ":" + name);
    }
  }

  describe('TopicController', function() {
    beforeEach(function() {
      topicController = testHelper.lookup('controller', 'topicController');
    });

    it('has to be true', function() {
      expect(Test.truth).to.equal(true); // BDD style
    });

  });

})();

//(function () {
//describe('The object under test', function() {
  //beforeEach(function() {
    //Test = {
      //truth: true
    //};
  //});

  //afterEach(function() {
    //// do something
  //});

  //it('has to be true', function() {
    //expect(Test.truth).to.equal(true); // BDD style
  //});

  //context("All is a lie!", function() {
    //beforeEach(function() {
      //Test = {
        //truth: false
      //};
    //});

    //it('was true', function() {
      //Test.truth.should.not.equal(true); // Should style
    //});
  //});
//});

