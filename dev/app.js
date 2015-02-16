angular.module("app", ['ngWidget'])
.directive('demo', function(Widget) {
  console.log('widget', Widget)
  return new Widget();
});
