Package.describe({
  name: 'anbuselvan:justified-gallery',
  summary: 'Another awesome gallery for Meteor.',
  version: '0.0.2',
  git: 'https://github.com/anbuselvan/justified-gallery.git'
});

Package.onUse(function (api) {
  api.use(['jquery'], 'client');

  api.addFiles([
    "vendor/swipebox/src/img/icons.png",
    "vendor/swipebox/src/img/icons.svg",
    "vendor/swipebox/src/img/loader.gif"
  ], "client", { isAsset: true });

  api.addFiles([
    'vendor/Justified-Gallery/dist/css/justifiedGallery.css',
    'vendor/Justified-Gallery/dist/js/jquery.justifiedGallery.js',
    'vendor/swipebox/src/css/swipebox.min.css',
    'vendor/swipebox/src/js/jquery.swipebox.min.js'
  ], 'client');
});
