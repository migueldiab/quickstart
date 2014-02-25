head.js "./bower_components/ink/js/ink-all.js"
  ,"./bower_components/jquery/dist/jquery.js"
  ,"./bower_components/html5-boilerplate/js/plugins.js"
  ,"./bower_components/i18next/i18next.js"
  ,"./bower_components/angular/angular.js"
  , ->
    console.info "Loading..."
    
    i18n.init({ debug: true
      ,returnObjectTrees: true
      ,fallbackLng: "es"
    }).done( ->
      console.info 'Done Loading dict files...'
      $('[data-i18n]').i18n()
      $('#langEs').on('click', ->
        console.info 'Dict es'
        i18n.setLng('es', ->
          $('[data-i18n]').i18n() 
        )
      )
      $('#langEn').on('click', ->
        console.info 'Dict en'
        i18n.setLng('en', ->
          $('[data-i18n]').i18n() 
        )
      )
      $(document.body).trigger 'DictionaryLoaded')
        
    $(document.body).bind 'DictionaryLoaded', ->
      console.info 'Loading Application...'


    
