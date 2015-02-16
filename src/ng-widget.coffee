angular.module 'ngWidget', []

.provider 'Widget', ->

  events = {}
  _scopeOptions = false

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
        angular.forEach events, (value, key)->
          elem.off key, value

    transclude: false
    restrict: 'EA'
    replace: false
    scope: _scopeOptions

  # Extends @ with the defaults object
  Widget = ->
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


    # store the users events in the events object to use in the link function
    @on = (event, callback)->
      events[event] = callback

  # Object to return for the injector
  return directiveObject =
    $get: ->
      Widget
    # Option for the config block of the user to overwrite the defaults
    setDefaults: (config)->
      angular.extend defaults, config
