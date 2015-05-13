Meteor.publish('categories', function() {
  return Categories.find();
});

Meteor.publish('gallery_images', function() {
  return GalleryImages.find();
});
