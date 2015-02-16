angular.module("app", ['ngWidget'])
.directive('demo', function(Widget) {
  var widget = new Widget();
  widget.on('click', function(e, scope){
    scope.message = 'changed';
    console.log('Clicked');
  });

  widget.scopeOptions({
    'code': 'one-way'
  });

  widget.ready(function(scope, elem, attrs) {
    console.log(scope, 'scope');
    console.log(scope, 'scope');
    console.log(attrs, 'attrs');
  });

  return widget;
});
