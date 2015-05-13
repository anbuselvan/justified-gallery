dict = new ReactiveDict('categories')
if Categories.find().count() == 0
  Categories.insert {
    name: 'Nature'
    info: 'Landscapes, animals, plants, sea, etc.'
  }, (err, res) ->
    if !err
      dict.set 'nature', res
    return
  Categories.insert {
    name: 'Travel'
    info: 'Photography to showcase locations, illustrate travel literature, etc.'
  }, (err, res) ->
    if !err
      dict.set 'travel', res
    return
  Categories.insert {
    name: 'Macro'
    info: 'The art of photographing very small and/or close-up objects.'
  }, (err, res) ->
    if !err
      dict.set 'macro', res
    return
if GalleryImages.find().count() == 0
  nature = dict.get('nature')
  i = undefined
  if nature
    i = 1
    while i <= 9
      GalleryImages.insert
        cid: nature
        name: 'nature-0' + i + '.jpg'
        small: 'nature-0' + i + '-small.jpg'
      i++
  travel = dict.get('travel')
  if travel
    i = 1
    while i <= 6
      GalleryImages.insert
        cid: travel
        name: 'travel-0' + i + '.jpg'
        small: 'travel-0' + i + '-small.jpg'
      i++
  macro = dict.get('macro')
  if macro
    i = 1
    while i <= 4
      GalleryImages.insert
        cid: macro
        name: 'macro-0' + i + '.jpg'
        small: 'macro-0' + i + '-small.jpg'
      i++
