dataReadyHold = null;

if (Meteor.isClient) {
  dataReadyHold = LaunchScreen.hold();
}

Router.map(function() {
  this.route('gallery', {
    path: '/',
    waitOn: function() {
      return [
        Meteor.subscribe('categories'),
        Meteor.subscribe('gallery_images')
      ];
    },
    onBeforeAction: function () {
      if (this.ready()) {
        dataReadyHold.release();
      }
      this.next();
    },
    data: function () {
      return Categories.find();
    },
    action: function () {
      this.render();
    }
  });
});
