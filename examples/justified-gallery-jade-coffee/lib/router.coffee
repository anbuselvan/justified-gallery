dataReadyHold = null
if Meteor.isClient
  dataReadyHold = LaunchScreen.hold()
Router.map ->
  @route 'gallery',
    path: '/'
    waitOn: ->
      [
        Meteor.subscribe 'categories'
        Meteor.subscribe 'gallery_images'
      ]
    onBeforeAction: ->
      if @ready()
        dataReadyHold.release()
      @next()
      return
    data: ->
      Categories.find()
    action: ->
      @render()
      return
  return
