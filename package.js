Package.describe({
  name: 'anbuselvan:justified-gallery',
  summary: 'Another awesome gallery with swipebox for Meteor.',
  version: '0.0.9',
  git: 'https://github.com/anbuselvan/justified-gallery.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use(['jquery'], 'client');

  api.addFiles([
    "vendor/swipebox/img/icons.png",
    "vendor/swipebox/img/icons.svg",
    "vendor/swipebox/img/loader.gif"
  ], "client", { isAsset: true });

  api.addFiles([
    'vendor/Justified-Gallery/dist/css/justifiedGallery.css',
    'vendor/Justified-Gallery/dist/js/jquery.justifiedGallery.js',
    'vendor/swipebox/swipebox.css',
    'vendor/swipebox/jquery.swipebox.min.js'
  ], 'client');
});
