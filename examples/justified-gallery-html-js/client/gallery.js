Template.gallery_items.rendered = function() {
  var self = this;
  self.swipeBoxReady = new ReactiveVar(false);
  var cid = this.data.category._id;
  $(this.find('.jGallery-' + cid)).justifiedGallery({
    margin: 3,
    rel: 'gallery-' + cid
  }).on('jg.complete', function () {
    if (self.swipeBoxReady.get() === false) {
      $('.jGallery-' + cid + ' a').swipebox();
      self.swipeBoxReady.set(true);
    }
  });
};

Template.gallery_items.helpers({
  images: function() {
    return GalleryImages.find({cid: this.category._id});
  },
  count: function() {
    return GalleryImages.find({cid: this.category._id}).count();
  },
  image_original: function() {
     return '/images/' + this.name;
  },
  image_small: function() {
     return '/images/' + this.small;
  }
});
