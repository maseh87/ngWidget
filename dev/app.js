angular.module("app", ['ngWidget'])
.directive('demo', function(Widget) {
  var widget = new Widget();
});
