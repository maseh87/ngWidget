angular.module("app", ['ngWidget'])
.directive('demo', function(Widget) {
  var widget = new Widget();
  widget.on('click', function(e, scope){
    scope.code = 'changed';
  });

  widget.scopeOptions({
    'code': 'one-way'
  });

  widget.ready(function(scope, elem, attrs) {
    console.log(scope, 'Here is the scope');
    console.log(elem, 'Here is your dom element');
    console.log(attrs, 'Here are the attributes on your directive');
  });

  return widget;
});
