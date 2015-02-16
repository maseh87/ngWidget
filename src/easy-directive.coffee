angular.module 'easy-directive', []

.provider 'easyDirective', ->

  events = {}
  _scopeOptions

  # Default properties for the directive
  defaults =
    template: '<div>Default ngWidget template, go change it!</div>'
    link: (scope, elem, attrs)->
      # Iterate through an object of events and callbacks
      # passing each one into elem.on
      angular.forEach events, (value, key)->
        elem.on key, value

      # Listen for the $destroy event to clean up
      scope.$on '$destroy', ->
        #then iterate through the elements and call element.off on each event
        angular.forEach event, (value, key)->
          elem.off key, value

    transclude: false
    restrict: 'EA'
    scope: _scopeOptions
    on: (event, callback)->
      # store the users events in the events object to use in the link function
      events.event = callback

  # Extends @ with the defaults object
  MyDirective = ->
    angular.extend @, defaults
    # Configurations for the directive's scope
    @scopeOptions = (option)->
      # scope: false === 'parent'
      _scopeOptions = 'false' if option is 'parent'
      # scope: true === 'child'
      _scopeOptions = 'true' if option is 'child'
      # scope: {} for isolate scope
      if angular.isObject option
        # Will have to iterate through object to convert the values
        angular.forEach option, (value, key)->
          value = '@' if value is 'attrValue' or value is 'one-way'
          value = '=' if value is 'two-way'
          value = '&' if value is 'function'

  # Object to return for the injector
  return directiveObject =
    $get: ->
      MyDirective
    # Option for the config block of the user to overwrite the defaults
    setDefaults: (config)->
      angular.extend defaults, config
