angular.module("app", ['ngWidget'])
.directive('demo', function(Widget) {
  return new Widget();
});
