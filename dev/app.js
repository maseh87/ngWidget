angular.module("app", ['ngWidget'])
.directive('demo', function(Widget) {
  var widget = new Widget();
  widget.on('click', function(e, scope){
    scope.message = 'changed';
  });
  return widget;
});
