CodealiaApp.controller("ContainerController", ["$scope",
  function($scope) {
    $scope.editors = [];

    $scope.updatePreview = function() {
      if ($scope.preview && $scope.editor) {
        $scope.preview.html($scope.editor.getValue());
      }
    }

    $scope.updateEditor = function() {
      if ($scope.preview && $scope.editor) {
        $scope.editor.setValue($scope.preview.html());
      }
    }

    $scope.initializeEditor = function() {
      editor = $scope.editor;

      editor.setTheme("ace/theme/chrome");
      editor.setFontSize(14);
      editor.getSession().setMode("ace/mode/html");
      editor.setHighlightActiveLine(false);
      editor.setShowPrintMargin(false);

      editor.getSession().on("change", $scope.updatePreview);
    }

    this.setEditor = function(scope, element, attrs) {
      $scope.editor = ace.edit(element.find("#passions-editor")[0]);
      $scope.initializeEditor();
      $scope.updateEditor();
    }

    this.makeEditable = function(scope, element, attrs) {
      $scope.preview = element;
      $scope.updateEditor();
    }
}]);
