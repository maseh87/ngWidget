angular.module('ngWidget', []).provider('Widget', function() {
  var MyDirective, defaults, directiveObject, events;
  events = {};
  defaults = {
    template: '<div>Default ngWidget template, go change it!</div>',
    link: function(scope, elem, attrs) {
      angular.forEach(events, function(value, key) {
        return elem.on(key, value);
      });
      return scope.$on('$destroy', function() {
        return angular.forEach(event, function(value, key) {
          return elem.off(key, value);
        });
      });
    },
    transclude: false,
    restrict: 'EA',
    isoScope: function(scopeObj) {},
    on: function(event, callback) {
      return events.event = callback;
    }
  };
  MyDirective = function() {
    return angular.extend(this, defaults);
  };
  return directiveObject = {
    $get: function() {
      return MyDirective;
    },
    setDefaults: function(config) {
      return angular.extend(defaults, config);
    }
  };
});

//# sourceMappingURL=maps/easy-directive.js.map