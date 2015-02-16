angular.module("app", ['ngWidget'])
.directive('demo', function(Widget) {
  var widget = new Widget();
  widget.on('click', function(){
    console.log('yaooo');
  });
  return widget;
});
