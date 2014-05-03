CodealiaApp.controller("ContainerController", ["$scope",
  function($scope) {
    $scope.editors = [];

    this.setEditorController = function(editorScope) {
      $scope.editorPanel = editorScope;
    }

    this.makeEditable = function(scope, element, attrs) {
      if (!scope.editable) {
        scope.editable = true;
      }
    }
}]);
