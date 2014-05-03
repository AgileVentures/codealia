CodealiaApp.controller("ContainerController", ["$scope",
  function($scope) {
    $scope.editors = [];

    this.setEditor = function(editorScope, element, attrs) {
      $scope.editorPanel = editorScope;
    }

    this.makeEditable = function(scope, element, attrs) {
        scope.preview = $("#page-preview");

        scope.editor = ace.edit("editor");
        editor = $scope.editor;

        editor.setTheme("ace/theme/chrome");
        editor.setFontSize(14);
        editor.getSession().setMode("ace/mode/html");
        editor.setHighlightActiveLine(false);
        editor.setShowPrintMargin(false);
        editor.commands.addCommand({
            name: "preview",
            bindKey: {
                win: "Shift-Enter",
                mac: "Shift-Enter"
            },
            exec: scope.generatePreview
        });

        editor.getSession().on("change", function(e) {
            scope.generatePreview(editor);
        });
    }
}]);
