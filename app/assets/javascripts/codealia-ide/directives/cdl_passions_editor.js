CodealiaApp.directive("cdlPassionsEditor", function() {
  return {
    restrict: "A",
    require: "^cdlContainer",
    templateUrl: "/angular-app/templates/passions-editor",
    controller: "EditorsController",
    link: function(scope, element, attrs, container) {
      container.setEditor(scope, element, attrs);
    }
  }
});
