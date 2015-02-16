angular.module('easy-directive', []).provider('easyDirective', function() {
  var MyDirective, defaults, directiveObject, events;
  events = {};
  _scopeOptions;
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
    scope: _scopeOptions,
    on: function(event, callback) {
      return events.event = callback;
    }
  };
  MyDirective = function() {
    angular.extend(this, defaults);
    return this.scopeOptions = function(option) {
      var _scopeOptions;
      if (option === 'parent') {
        _scopeOptions = 'false';
      }
      if (option === 'child') {
        _scopeOptions = 'true';
      }
      if (angular.isObject(option)) {
        return angular.forEach(option, function(value, key) {
          if (value === 'attrValue' || value === 'one-way') {
            value = '@';
          }
          if (value === 'two-way') {
            value = '=';
          }
          if (value === 'function') {
            return value = '&';
          }
        });
      }
    };
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