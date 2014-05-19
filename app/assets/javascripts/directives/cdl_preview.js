CodealiaApp.directive("cdlPreview", [ "EditorsFactory",
  function(EditorsFactory) {
    return {
      restrict: "A",
      link: function(scope, element, attrs) {
        EditorsFactory.makeEditable(scope, element, attrs);
      }
    }
  }
]);
