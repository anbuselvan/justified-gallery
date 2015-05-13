Template.gallery_items.rendered = ->
  self = this
  self.swipeBoxReady = new ReactiveVar(false)
  cid = @data.category._id
  $(@find('.jGallery-' + cid)).justifiedGallery(
    margin: 3
    rel: 'gallery-' + cid).on 'jg.complete', ->
    if self.swipeBoxReady.get() == false
      $('.jGallery-' + cid + ' a').swipebox()
      self.swipeBoxReady.set true
    return
  return

Template.gallery_items.helpers
  images: ->
    GalleryImages.find cid: @category._id
  count: ->
    GalleryImages.find(cid: @category._id).count()
  image_original: ->
    '/images/' + @name
  image_small: ->
    '/images/' + @small
