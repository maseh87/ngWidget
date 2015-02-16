angular.module('easy-directive', []).provider('easy-directive', function() {
  var MyDirective, defaults, directiveObject;
  defaults = {
    template: '<div>Default ngWidget template, go change it!</div>',
    link: function(scope, elem, attrs) {},
    transclude: false,
    restrict: 'EA'
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