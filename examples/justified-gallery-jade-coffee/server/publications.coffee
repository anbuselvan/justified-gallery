Meteor.publish 'categories', ->
  Categories.find()
Meteor.publish 'gallery_images', ->
  GalleryImages.find()
