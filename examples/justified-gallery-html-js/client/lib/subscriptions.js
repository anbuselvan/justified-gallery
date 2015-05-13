Deps.autorun(function() {
  Meteor.subscribe('categories'),
  Meteor.subscribe('gallery_images')
});
