angular.module 'easy-directive', []

.provider 'easyDirective', ->

  events = {}


  # Default properties for the directive
  defaults =
    template: '<div>Default ngWidget template, go change it!</div>'
    link: (scope, elem, attrs)->
      # Iterate through an object of events and callbacks passing each one into elem.on
      angular.forEach events, (value, key)->
        elem.on key, value

      # Listen for the $destroy event to clean up
      scope.$on '$destroy', ->
        #then iterate through the elements and call element.off on each event
        angular.forEach event, (value, key)->
          elem.off key, value

    transclude: false
    restrict: 'EA'
    isoScope: (scopeObj)->
    on: (event, callback)->
      # store the users events in the events object to use in the link function
      events.event = callback

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
