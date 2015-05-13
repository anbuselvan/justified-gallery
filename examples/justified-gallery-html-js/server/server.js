var dict = new ReactiveDict('categories');

if (Categories.find().count() === 0) {
  Categories.insert({name: 'Nature', info: 'Landscapes, animals, plants, sea, etc.'}, function(err, res) {
    if (!err) {
      dict.set('nature', res);
    }
  });
  Categories.insert({name: 'Travel', info: 'Photography to showcase locations, illustrate travel literature, etc.'}, function(err, res) {
    if (!err) {
      dict.set('travel', res);
    }
  });
  Categories.insert({name: 'Macro', info: 'The art of photographing very small and/or close-up objects.'}, function(err, res) {
    if (!err) {
      dict.set('macro', res);
    }
  });
}

if (GalleryImages.find().count() === 0) {
  var nature = dict.get('nature'), i;
  if (nature) {
    for(i = 1; i <= 9; i++)
      GalleryImages.insert({cid: nature, name: 'nature-0' + i + '.jpg', small: 'nature-0' + i + '-small.jpg'});
  }
  var travel = dict.get('travel');
  if (travel) {
    for(i = 1; i <= 6; i++)
      GalleryImages.insert({cid: travel, name: 'travel-0' + i + '.jpg', small: 'travel-0' + i + '-small.jpg'});
  }
  var macro = dict.get('macro');
  if (macro) {
    for(i = 1; i <= 4; i++)
      GalleryImages.insert({cid: macro, name: 'macro-0' + i + '.jpg', small: 'macro-0' + i + '-small.jpg'});
  }
}
