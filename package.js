Package.describe({
  name: 'anbuselvan:justified-gallery',
  summary: 'Another awesome gallery for Meteor.',
  version: '0.0.1',
  git: 'https://github.com/anbuselvan/justified-gallery.git'
});

Package.onUse(function (api) {
  api.use(['jquery','twbs:bootstrap'], 'client');

  api.addFiles([
    "vendor/Justified-Gallery/libs/swipebox/img/icons.png",
    "vendor/Justified-Gallery/libs/swipebox/img/icons.svg",
    "vendor/Justified-Gallery/libs/swipebox/img/loader.gif"
  ], "client", { isAsset: true });

  api.addFiles([
    'vendor/Justified-Gallery/dist/css/justifiedGallery.css',
    'vendor/Justified-Gallery/dist/js/jquery.justifiedGallery.js',
    'vendor/Justified-Gallery/libs/swipebox/swipebox.css',
    'vendor/Justified-Gallery/libs/swipebox/jquery.swipebox.min.js'
  ], 'client');
});
