CodealiaApp.directive("cdlPassionsEditor", [ "EditorsFactory",
  function(EditorsFactory) {
    return {
      restrict: "A",
      templateUrl: "/templates/passions-editor",
      link: function(scope, element, attrs) {
        EditorsFactory.setEditor(scope, element, attrs);
      }
    };
  }
]);
