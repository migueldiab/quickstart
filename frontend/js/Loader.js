// Generated by CoffeeScript 1.6.3
head.js("./bower_components/ink/js/ink-all.js", "./bower_components/jquery/dist/jquery.js", "./bower_components/html5-boilerplate/js/plugins.js", "./bower_components/i18next/i18next.js", "./bower_components/angular/angular.js", function() {
  console.info("Loading...");
  i18n.init({
    debug: true,
    returnObjectTrees: true,
    fallbackLng: "es"
  }).done(function() {
    console.info('Done Loading dict files...');
    $('[data-i18n]').i18n();
    $('#langEs').on('click', function() {
      console.info('Dict es');
      return i18n.setLng('es', function() {
        return $('[data-i18n]').i18n();
      });
    });
    $('#langEn').on('click', function() {
      console.info('Dict en');
      return i18n.setLng('en', function() {
        return $('[data-i18n]').i18n();
      });
    });
    return $(document.body).trigger('DictionaryLoaded');
  });
  return $(document.body).bind('DictionaryLoaded', function() {
    return console.info('Loading Application...');
  });
});
