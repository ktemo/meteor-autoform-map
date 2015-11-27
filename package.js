Package.describe({
  name: 'ktemo:autoform-map',
  summary: 'Edit location coordinates with autoForm',
  version: '0.2.1',
  git: 'https://github.com/ktemo/meteor-autoform-map'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
  	'coffeescript',
  	'templating',
    'reactive-var',
  	'aldeed:autoform@5.6.0'
  ], 'client');

  api.imply([
    'dburles:google-maps@1.1.5'
  ], 'client');

  api.addFiles([
  	'lib/client/autoform-map.html',
    'lib/client/autoform-map.css',
  	'lib/client/autoform-map.coffee'
  ], 'client');
});
