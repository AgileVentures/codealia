CodealiaApp.directive("cdlEditable", function() {
  return {
    restrict: "A",
    require: "^cdlContainer",
    link: function(scope, element, attrs, parent) {
      parent.makeEditable(scope, element, attrs);
    }
  }
});
