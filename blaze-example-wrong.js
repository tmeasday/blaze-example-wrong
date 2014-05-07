if (Meteor.isClient) {
  Template.hello.post = function () {
    return Template[this.postName];
  };

  Template.hello.postData = function () {
    return {foo: 'bar'};
  };  
}
