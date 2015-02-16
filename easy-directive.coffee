angular.module 'easy-directive', []

.provider 'easyDirective', ->

  # Default properties for the directive
  defaults = 
    template: '<div><h1>Template</h1></div>'
    link: (scope, elem, attrs)->
    transclude: false  
    restrict: 'EA'
    isoScope: (scopeObj)->

  # Extends @ with the defaults object
  MyDirective = ->
    angular.extend @, defaults

  # Object to return for the injector
  return directiveObject = 
    $get: ->
      MyDirective
      
    # Option for the config block of the user to overwrite the defaults 
    setDefaults: (config)->
      angular.extend defaults, config
      